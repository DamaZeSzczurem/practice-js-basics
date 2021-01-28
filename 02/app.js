
/* rozwiązanie z pętlą for */
const x = prompt("Dla jakiej liczby podać Ci tabliczkę mnożenia?");

if(x<=9){
  for (let i = 1; i < 9; i++) {
    console.log(x + " * " + i + " = " + x*i);
  }
} else{
    console.log("Hej! To nie jest odpowiednia liczba!");
}
/* rozwiązanie z pętlą while  */
const y = prompt("jaka jest podstawa potęgowania?");
const k =  prompt("jaki jest wykładnik potęgowania?");
const text = " * " + y;
let score = y;
let n=1;

while (n<=k) {
  if (n=k){
    console.log( y + text.repeat(k-1) + " = " + score);
  }
  score = score * y;
  n++;
}