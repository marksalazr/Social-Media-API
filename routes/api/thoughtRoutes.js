const router = require('express').Router();

const{
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} =require ('../../controllers/thought');
