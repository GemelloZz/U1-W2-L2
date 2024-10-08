/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numX = 10;
let numY = 20;
if (numX < numY) {
  console.log("x è il minore");
} else {
  console.log("Y è il minore");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numZ = 5;
if (numZ !== 5) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numG = 230;
if (numG % 5) {
  console.log("il numero è divisibile per 5");
} else {
  console.log("non è divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numH = 10;
let numJ = 2;
if (numH === 8) {
  console.log("il numH è 8");
} else if (numJ === 8) {
  console.log("ecco il numJ è 8");
} else if (numH - numJ === 8) {
  console.log("la sottrazione da 8");
} else if (numJ - numH === 8) {
  console.log("la 2 sottrazione da 8");
} else if (numJ + numH === 8) {
  console.log("l'addizione da 8");
} else {
  console.log("niente di tutto ciò è vero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
let total = 50;
if (totalShoppingCart > total) {
  console.log("hai raggiunto la spedizione gratuita");
} else if (totalShoppingCart < total) {
  console.log("non hai il diritto alla spedizione gratuita vi verrà aggiunto 10 per la spedizione");
} else {
  console.log("caccia li sordi");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFriday = 0;
blackFriday = (totalShoppingCart * 20) / 100;

if (blackFriday > total) {
  console.log("hai raggiunto la spedizione gratuita");
} else if (blackFriday < total) {
  console.log("non hai il diritto alla spedizione gratuita vi verrà aggiunto 10 per la spedizione");
} else {
  console.log("caccia li sordi");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/ let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2 > num3) {
  console.log("ecco l'ordine");
} else if (num1 < num2 < num3) {
  console.log("ecco l'ordine seconda operazione");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let word = "30";
if (typeof word === "string") {
  console.log("è una stringa");
} else {
  console.log("è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numP = 37;
if (numP % 2 > 0) {
  console.log("il numero è dispari ");
} else {
  console.log("il numero è pari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZIO 10
//Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else {
  console.log("niente di tutto ciò è vero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "toronto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let newArray = [];
newArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(newArray);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
newArray.splice(9, 1, 100);
console.log(newArray);
