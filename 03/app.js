const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

/*function that sort numbers and return two greatest number*/
function getSum(num1, num2, num3){
    num1 = Math.round(num1);
    num2 = Math.round(num2);
    num3 = Math.round(num3);
    let sorted= [num1,num2,num3].sort((a, b) => b - a );
    let sumSorted = sorted[0]+sorted[1]; 
    return sumSorted;  
}
const sum = getSum(a,b,c);
/*function that check if number is even*/
const isEven = function(num){
    if(typeof num!== "number"){
        return null;
    }
    else{
        if (num%2 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
const even = isEven(sum);
/*function that show information about results*/
function showInfo(value1, value2){
    switch (value2) {
        case null:
            console.log(`Podany argument ${value1} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${value1} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${value1} jest nieparzysty`);
            break;
    }
}
showInfo(sum, even);
function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}