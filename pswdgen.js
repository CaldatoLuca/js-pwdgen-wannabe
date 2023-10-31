"use strict";

const elementPassword = document.getElementById("password");

const elementName = prompt("inserisci il tuo nome");
const elementSurname = prompt("inserisci il tuo cognome");
const elementColor = prompt("inserisci il tuo colore preferito");
const elementNumber = prompt("inserisci il tuo numero preferito");

elementPassword.innerHTML =
  elementName + elementSurname + elementColor + elementNumber;
