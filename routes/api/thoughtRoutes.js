// GLOBAL VARIABLES

const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');





// ROUTER POSTS

// API/thoughts

router.route('/')
.get(getThoughts)
.post(createThought);


// API/thoughts/:thoughtId

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);



// API/thoughts/:thoughtId/reactions

router
  .route('/:thoughtId/reactions')
  .post(addReaction);



// API/thoughts/:thoughtId/reactions/:reactionId

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);




//module export to router file

module.exports = router;

