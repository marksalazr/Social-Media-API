const router = require('express').Router();

const{
    addReaction,
    createThought,
    deleteThought,
    getThought,
    getThoughts,
    removeReaction,
    updateThought,
} =require ('../../controllers/thoughtController');

router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought); 
router
    .route('/:thoughtId/reactions')
    .post(addReaction);
 router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;
