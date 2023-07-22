const { User } = require('../models'); // maybe Thought too




module.exports = {


  // GET allUsers

  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = { users };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },



  // SINGLE USER posts

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json( user )
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },



  // NEW USER

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },



  // DELETE USER

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          :
              res.json({ message: 'User successfully deleted' })
              )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },



  // UPDATE USER

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true } 
      )
      .then((updatedUser) =>
        !updatedUser
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(updatedUser)
      )
      .catch((err) => res.status(500).json(err));
  },



  // ADD FRIEND TO SELECTED USER BY ID/NAME

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((newFriend) =>
        !newFriend
          ? res.status(404)
            .json({ message: 'No user found with that ID to add as friend :(' })
          : res.json( { message: 'Added friend' })
      )
      .catch((err) => res.status(500).json(err));
  },



  // removeFriend from USER

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId  } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json({ message: 'Removed friend' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
