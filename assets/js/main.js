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
    let permission = false;
  
    for (let i = 0; i < listMail.length; i++) {
      if (listMail[i] === mailElement.value) {
        permission = true;
      }
    }
  
    if(permission === true) {
        divElement.innerHTML = `${mailElement.value}: Accesso Consentito`;
    } else {
        divElement.innerHTML = `${mailElement.value}: Accesso Negato`;
    } 
})



//Es Dadi
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */ 

const formDadi = document.getElementById("form_dadi")
const divEl = document.createElement("div")
formDadi.insertAdjacentElement('afterend', divEl);


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
formDadi.addEventListener("submit", function(e){
    e.preventDefault();
    const pc = Math.floor(Math.random() * 6) + 1;
    const user = Math.floor(Math.random() * 6) + 1;

    divEl.innerHTML = `Punteggio Giocatore: ${user} <br>
    Punteggio Computer: ${pc}`

    //Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if(pc > user){
        divEl.innerHTML = '  VINCE IL COMPUTER';
   } else if(user > pc){
    divEl.innerHTML += '  VINCE IL GIOCATORE';
   } else {
    divEl.innerHTML += '  PAREGGIO';
   }
});



































//Bonus Mail
//Usiamo un input e un bottone per inserire la mail

//poi mostriamo i risultati in pagina.





























//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//Stabilire il vincitore, in base a chi fa il punteggio più alto.


