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
    return console.log ("Suma największych liczb to " + sumSorted);  
}

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

function showInfo(value1, value2){
    switch (value2) {
        case null:
            console.log(`Podany argument ${value2} nie jest liczbą`);
            break;
        case true:
            console.log(`Podany argument ${value2} jest parzysty`);
            break;
        case false:
            console.log(`Podany argument ${value2} jest nieparzysty`);
            break;
    }
}

function randomNumber(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}