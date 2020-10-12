// document.writeln('Hello World');

// alert('Hello World');

// document.getElementById('hello').innerHTML = 'ciao a tutti';

// var hello_world = 'ciao a tutti';
//
// alert(hello_world);
//
// hello_world = 'arrivederci';
//
// alert(hello_world);

// var nome_utente = prompt ('Come ti chiami?');
//
// document.writeln ('Ciao ' + nome_utente + '!');
//
// document.getElementById('hello').innerHTML = 'Ciao ' + nome_utente + '!';
// var data_corrente = new Date();
// var anno_corrente = data_corrente.getFullYear();
//
// var anni_utente = prompt ('Quanti anni hai?');
//
// console.log( 'età dell\'utente: ' + anni_utente);
//
//
// var anno_nascita = anno_corrente - anni_utente;
//
// console.log(anno_nascita);
//
// document.writeln('Sei nato nel ' + anno_nascita);

var user_name = prompt ('Inserisci il tuo nome');
console.log(user_name);

var user_surname = prompt('Inserisci il tuo cognome');
console.log(user_surname);

var user_color = prompt('Inserisci il tuo colore preferito');
console.log(user_color);

document.getElementById('password').innerHTML = user_name + user_surname + user_color + '20';
