/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Amiga", "Pajaro", "Hamster", "Tia"];
let action = ["Comido", "cocino", "Regalado", "accionado"];
let what = ["mesa", "perro", "silla"];
let when = ["Clinica", "hospital", "casa", "carro"];

window.onload = function() {
  let index = Math.floor(Math.random() * 3);
  document.querySelector("#excuse").innerHTML =
    who[index] +
    " " +
    action[index] +
    " " +
    what[index] +
    " " +
    when[index] +
    " "; //write your code here
  console.log("");
};
