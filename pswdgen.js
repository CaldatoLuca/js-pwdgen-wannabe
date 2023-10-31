"use strict";

const elementPassword = document.getElementById("password");

const elementName = prompt("inserisci il tuo nome");
const elementSurname = prompt("inserisci il tuo cognome");
const elementColor = prompt("inserisci il tuo colore preferito");
const elementNumber = prompt("inserisci il tuo numero preferito");

console.log("il tuo nome: " + elementName);
console.log("il tuo cognome: " + elementSurname);
console.log("il tuo colore preferito: " + elementColor);
console.log("il tuo numero preferito: " + elementNumber);

elementPassword.innerHTML =
  elementName + elementSurname + elementColor + elementNumber;
