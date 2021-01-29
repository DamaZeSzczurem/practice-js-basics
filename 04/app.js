const array = createArray(10,200);
const sortedArray = sort(array);
const avargeArray = getAvg(sortedArray);
console.log(`Średnia artmetyczna argumentów podanej tablicy to ${avargeArray}`);

/*function that create array with 20 random numbers in range beatween min and max*/
function createArray(min,max){
  let arr=[];
  for (let i = 0; i < 20; i++) {
    let randNum = Math.round((Math.random()*(max-min))+min);
    arr.push(randNum);    
  }
  return arr;
}
/*function that sort array and slice it to 10 arguments*/
function sort(arr){
  let sortedArr = arr.sort((a, b) => b - a );
  let slicedArr = sortedArr.slice(0,10);
  return slicedArr;
}
/*function that caluclate arthmetic avarge of arguments in array*/
function getAvg(arr){
 let sumArr = arr.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
  });
  let arrAvg = sumArr/(arr.length);
  return arrAvg;
}
