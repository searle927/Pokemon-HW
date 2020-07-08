require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//middleware - I DONT REMEMBER WHAT THIS IS FOR
app.use(express.urlencoded({ extended: false }));


// controllers
const pokemonController = require('./controller/pokemon');
app.use('/pokemon', pokemonController);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

