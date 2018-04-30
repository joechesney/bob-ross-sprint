'use strict';

const express = require('express');
const app = express();
const movieAPI = require('imdb-api');
const {key} = require('./server/key');

app.use(express.static(__dirname + '/client'));
app.use("/angular", express.static(__dirname + '/node_modules/angular/'));
app.use("/angular-route", express.static(__dirname + '/node_modules/angular-route/'));

app.get("/movies",(req,res,next)=>{
  movieAPI.search({title:req.query.keyword}, {apiKey: key})
  .then(movies=>{
    console.log('movies: ',movies);
    res.send(movies);
  });
});

app.listen(3000, ()=>{
  console.log('CHUPS DIH STWEH 3000');
});