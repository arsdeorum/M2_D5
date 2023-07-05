/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
  }

  // test
  console.log("esercizio 1")
  console.log(crazySum(2, 2)); // Output atteso: 12
  console.log(crazySum(5, 3)); // Output atteso: 8
  console.log(crazySum(4, 4)); // Output atteso: 24
  console.log(" ")

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(number) {
    return (number >= 20 && number <= 100) || number === 400;
  }
  
  // test
  console.log("esercizio 2")
  console.log(boundary(50)); // Output atteso: true
  console.log(boundary(150)); // Output atteso: false
  console.log(boundary(400)); // Output atteso: true  
  console.log(" ")
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString(str) {
    // Convertiamo la stringa in un array di caratteri, invertiamo l'ordine degli elementi e uniamo di nuovo gli elementi in una stringa
    return str.split('').reverse().join('');
  }
  
  // test
  console.log("esercizio 3")
  console.log(reverseString('EPICODE')); // Output atteso: EDOCIPE
  console.log(" ")

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
function upperFirst(str) {
    // Divido la stringa in un array di parole
    const parole = str.split(' ');
  
    // Itero su ogni parola dell'array
    const parolemaiuscole = parole.map(word => {
      const primalettera = word.charAt(0).toUpperCase();
      const restoparola = word.slice(1);
      return primalettera + restoparola;
    }); // Restituisco maiuscola la prima lettera di ogni parola

    // Unisco le parole modificate in una stringa
    return parolemaiuscole.join(' ');
  }
  
  // test
  console.log("esercizio 4")
  console.log(upperFirst('ciao mondo')); // Output atteso: Ciao Mondo
  console.log(upperFirst('javascript è fantastico')); // Output atteso: Javascript È Fantastico
  console.log(" ")

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
function giveMeRandom(n) {
    const numerirandom = [];
  
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * 11);
      numerirandom.push(randomNumber);
    } 
    return numerirandom;
  }
  
  // test
  console.log("esercizio 5")
  console.log(giveMeRandom(5)); // Output atteso: cinque numeri a caso tra 0 e 11
  console.log(giveMeRandom(8)); // Output atteso: otto numeri a caso tra 0 e 11
  console.log(" ")

  
/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
//definisco la funzione e l'operazione che deve eseguire
function area(l1, l2) {
    let rettangoloArea = l1 * l2;
    return rettangoloArea;
  }
// test
  console.log("esercizio extra 1: ", area(10, 20))   //visualizzo il risultato in console
  console.log(" ")

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
//dichiaro la funzione e l'operazione da eseguire
function crazyDiff(numero) {
    var diff = numero - 19;
    
    if (diff < 0) {
      diff = -diff;
    }
    
    if (diff > 19) {
      return diff * 3;
    }
    
    return diff;
  }
  // test
  console.log("esercizio Extra 2")
  console.log(crazyDiff(25));  // Output: 18 (differenza = 25 - 19 = 6, non supera 19)
  console.log(crazyDiff(10));  // Output: 9 (differenza = 10 - 19 = -9, valore assoluto = 9, non supera 19)
  console.log(crazyDiff(40));  // Output: 63 (differenza = 40 - 19 = 21, supera 19, 63 risultato moltiplicato per 3)
  console.log(" ")
    
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
//dichiaro la funzione codify
function codify(str) {
    if (str.startsWith("code")) {
      return str;
    } else {
      return "code" + str;
    }
  }
  //aggiunto "code" se mancante
  
  // test
  console.log("esercizio Extra 3")
  console.log(codify("Hello"));  // Output atteso: codeHello
  console.log(codify("codeWorld"));  // Output atteso: codeWorld
  console.log(codify("JavaScript"));  // Output atteso: codeJavaScript
  console.log(" ")

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
//dichiaro la funzione check3and7
function check3and7(number) {
    if (number % 3 === 0 || number % 7 === 0) { //l'operatore modulo (%) restituisce il resto della divisione del numero per 3 e 7. se il resto è 0 restituisce true
      return true;
    } else {
      return false;
    }
  }
  
  //test
  console.log("esercizio Extra 4")
  console.log(check3and7(9));  // Output atteso: true (9 è un multiplo di 3)
  console.log(check3and7(14)); // Output atteso: true (14 è un multiplo di 7)
  console.log(check3and7(10)); // Output atteso: false (10 non è un multiplo né di 3 né di 7)  
  console.log(" ")

/* ESERCIZIO 5
Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
//dichiaro la funzione cutString
function cutString(str) {
    return str.slice(1, -1); //con slice 1 e -1 prendo l'ultimo e il primo carattere
  }
  const esempiostr = "Esempio";

  // test:
  console.log("esercizio Extra 5")
  console.log(cutString(esempiostr)); // stampa "sempi"
  console.log(" ")
  console.log("Esercizio Completato")
  console.log(" ")

  
