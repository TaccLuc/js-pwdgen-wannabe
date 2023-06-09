let userName = prompt('Inserisci il tuo nome');
let userSurname = prompt('Inserisci il tuo cognonome');
let userColor = prompt('Inserisci il tuo colore preferito');

let pwd = userName + userSurname + userColor;

document.getElementById('password').innerHTML = 'La tua password sicurissima è: ' + pwd + '101';