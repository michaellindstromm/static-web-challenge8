

let splitValues = function(value) {
  let arrayOfNumbers = value.split("");
  for (let j = 0; j < arrayOfNumbers.length; j++) {
    arrayOfNumbers[j] = Number(arrayOfNumbers[j]);
  }
  return arrayOfNumbers
}

// console.log(splitValues("19"));

function squareAndAdd(passedValue) {
  let processedVals = [];
  let k = 0;
  while(k < passedValue[k]) {
    let squared = (passedValue[k]**2);
    processedVals.push(squared);
    k++;
  }

  let allTogether = 0;
  for (let j = 0; j < processedVals.length; j++) {
    allTogether = allTogether + processedVals[j];
  }

  return allTogether;

}

function checkHappy(passedValue){
  if (passedValue === 1 || passedValue === 7) {
    // console.log(i, "is a happy number :)");
    happy.push(i);
  } else {
    let checkDigits = passedValue.toString();
    if (checkDigits.length === 1) {
      // console.log(i, "is a sad number :(");
    } else {
      checkDigits = splitValues(checkDigits);
      let newNumber = squareAndAdd(checkDigits);
      checkHappy(newNumber);
    }
  }
}

let button = document.getElementById("btn-checkvalue");

let testThisNumber;
button.addEventListener("click", function() {
  testThisNumber = document.getElementById("numberVal").value;
  let testThis = splitValues(testThisNumber);
  testThis = squareAndAdd(testThis);
  testThis = checkHappy(testThis);
});

let happy = [];
let testThis = [];
let splitArray = [];
for (var i = 0; i < 1001; i++) {
  let nums = i;
  testThis[i] = nums.toString();
  splitArray[i] = splitValues(testThis[i]);
  splitArray[i] = squareAndAdd(splitArray[i]);
  splitArray[i] = checkHappy(splitArray[i])
}
console.log(happy);
