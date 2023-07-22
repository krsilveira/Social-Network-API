// GLOBAL VARIABLE

const { Thought, User } = require('../models');



module.exports = {


  // GET allThoughts

  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => {
        res.json(thoughts);
      })
      .catch((err) => res.status(500).json(err));
  },


  // GET Thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  // createThought

  createThought(req, res) {
    Thought.create(req.body)
      .then((newThought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId }, // username: req.body.username would work too
          { $push: { thoughts: newThought._id } },
          { runValidators: true, new: true }
        );
      })
      .then((userData) => 
        !userData 
          ? res.status(404)
            .json({ message: 'Thought created, but no such user found' })
          : res.json( { message: 'Thought created and linked to user'})
      )
      .catch((err) => {
        // console.log(err);
        return res.status(500).json(err);
      });
  },



  // DEL deleteThought  post

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((deadThought) => {
        if (!deadThought) {
          return res.status(404).json({ message: 'No thought found with that ID X(' })
        } else {
          return User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { runValidators: true, new: true }
          )
        }
      })
      .then((userData) => 
      !userData 
        ? res.status(404).json({ message: 'Thought deleted, but no such user found' })
        : res.json( { message: 'Thought deleted and removed from user'})
    )
      .catch((err) => res.status(500).json(err));
  },


  // PUT  updateThought

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: {thoughtText: req.body.thoughtText} },
      { runValidators: true, new: true }
    )
      .then((updatedThought) =>
        !updatedThought
          ? res.status(404).json({ message: 'No thought found with that ID :(' })
          : res.json(updatedThought)
      )
      .catch((err) => res.status(500).json(err));
  },



  // POST addReaction

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((newReaction) =>
        !newReaction
          ? res.status(404)
            .json({ message: 'No thought found with that ID to add reaction :(' })
          : res.json( { message: 'Added reaction to thought' })
      )
      .catch((err) => res.status(500).json(err));
  },




  // DEL deleteReaction

  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json( { message: 'deleted reaction to thought' } )
      )
      .catch((err) => res.status(500).json(err));
  },
};

