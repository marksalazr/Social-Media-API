const router = require('express').Router();

const{
    addReaction,
    createThought,
    deleteThought,
    getSingleThought,
    getThoughts,
    removeReaction,
    updateThought,
} =require ('../../controllers/thoughtController');
//// use api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought);
// /api/thoughts/:
router
    .route('/:thoughtID')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought); 
router
    .route('/:thoughtID/reactions')
    .post(addReaction);
 router
    .route('/:thoughtId/reactions/:reactionID')
    .delete(removeReaction);

module.exports = router;
