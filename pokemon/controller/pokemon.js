const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

// index - first step - came from server
router.get('/', (req, res) => {
    res.send(pokemon);
});

//show - came from server
router.get('/:id', (req, res) => {
    (req.body.id)
    const newData = req.body;
    pokemon.push(newData); //adds new data
    res.send(newData); 
});

//delete 
router.delete('/:id', (req, res) => {
    //splice takes pokemon out - the number 1 is for 
    const deletedPokemon = pokemon.splice(req.params.id, 1); 
    res.send(deletedPokemon);
});

//update
router.put('/:id', (req, res) => {
    fruits[req.params.id] = req.body;
    res.send(req.body);
});

module.exports = router;
