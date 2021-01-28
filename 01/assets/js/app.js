const a = '4.2';
const b = 9;

const sum = a+b;
const dif = a-b;
const mult = a*b;
const div = a/b;
const squera = a*a;
const squerb = b*b;

console.log("a wynosi " +a + " i ma typ " + typeof(a));
console.log("b wynosi " +b + " i ma typ " + typeof(b));

if (sum>20){
  console.log("a+b = "+sum);
  console.log("suma jest większa od 20")
} 
if (dif>20){
  console.log("a-b =" + dif);
  console.log("różnica jest większa od 20")
} 
if (mult>20){
  console.log("a*b = " + mult);
  console.log("iloczyn jest większy od 20")
} 
if (div>20){
  console.log("a/b = " + div);
  console.log("iloraz jest większy od 20")
} 
if (squera>20){
  console.log("a^2 = " + squera);
  console.log("kwadrat a jest większy od 20")
} 
if (squerb>20){
  console.log("b^2 = " + squerb);
  console.log("kwadrat b jest większy od 20")
} 

