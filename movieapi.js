const connect = require('./connect');
const axios = require('axios');
const express = require('express');
const app = express();

const apikey = 'c8ec4741';
const title = 'Kill Bill vol 1';

const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`;

axios.get(querystr).then((response) => {
    filmValue = new connect({
        Title: response.data.Title,
        year: response.data.Year,
        Genre: response.data.Genre
    });

    filmValue.save().then(result => {
        console.log("Success" + result);
    })
    
        .catch(error => {
            console.log("Error" + error);
        }
        );
});

app.get('/Insert', (req, res) => {
    res.send(result.Year);
});

app.get('/Delete', (req, res) => {
    res.send('Successfully deleted from database');
});

app.get('/Update', (req, res) => {
    res.send('Successfully updated to database');
});

app.listen(5000);