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
const userMail = prompt('La tua email');
//contralla che sia nella lista di chi puo' accedere
const listMail = ['nome.cognome@email.com', 'dan97-oddo@live.it', 'prova'];


//stampa un messaggio appropriato sull’esito del controllo.
for (let i = 0; i < listMail.length; i++) {
    if (listMail[i] === userMail) {
      alert("Accesso Consentito");
      console.log(listMail[i]);

    } else (listMail[i] != userMail); {
      alert("Accesso Negato!");
      console.log(listMail[i]);
    }
  }




































//Bonus Mail
//Usiamo un input e un bottone per inserire la mail

//poi mostriamo i risultati in pagina.





























//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

//Stabilire il vincitore, in base a chi fa il punteggio più alto.


