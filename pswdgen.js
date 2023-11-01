"use strict";

const elementPassword = document.getElementById("password");

const elementName = prompt("inserisci il tuo nome");
const elementSurname = prompt("inserisci il tuo cognome");
const elementColor = prompt("inserisci il tuo colore preferito");
const elementNumber = Math.floor(Math.random() * 100);

console.log("il tuo nome: " + elementName);
console.log("il tuo cognome: " + elementSurname);
console.log("il tuo colore preferito: " + elementColor);
console.log("il tuo password number è: " + elementNumber);

elementPassword.innerHTML =
  elementName + elementSurname + elementColor + elementNumber;
