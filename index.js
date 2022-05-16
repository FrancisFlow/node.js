//jshint esversion:6

const superheroes = require('superheroes');
const supervillains= require('supervillains');

var ahero=superheroes.random();
var avillain = supervillains.random()

console.log(ahero + " VS " + avillain)
