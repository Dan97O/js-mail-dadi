/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//chiedi all'utente la sua email
//const userMail = prompt('La tua email');
//contralla che sia nella lista di chi puo' accedere
const listMail = ['nome.cognome@email.com', 'dan97-oddo@live.it', 'prova'];
const formElement = document.querySelector("form");
const mailElement = document.querySelector("input");
const divElement = document.createElement("div");

formElement.insertAdjacentElement('afterend', divElement);


formElement.addEventListener("submit", function(e){
    e.preventDefault();
    let password = 0;
  
    for (let i = 0; i < listMail.length; i++) {
      if (listMail[i] === mailElement.value) {
        divElement.innerHTML = `${mailElement.value}: Accesso Consentito`;
        password = 1;
      }
    }
  
    if (password === 0 || listMail[i] != mailElement.value) {
      divElement.innerHTML = `${mailElement.value}: Accesso Negato`;
    } 
})




































//Bonus Mail
//Usiamo un input e un bottone per inserire la mail

//poi mostriamo i risultati in pagina.





























//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//Stabilire il vincitore, in base a chi fa il punteggio più alto.


