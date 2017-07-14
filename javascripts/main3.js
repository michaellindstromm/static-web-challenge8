let happy = [];
let nums = 0;
// let currentNum = 0;

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
    happy.push(nums)
    return nums;
  } else {
    let checkDigits = passedValue.toString();
    if (checkDigits.length === 1) {
      // console.log(i, "is a sad number :(");
      return nums;
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

  let testThis = [];
  let splitArray = [];
  for (var i = 0; i < 10001; i++) {
    nums = i;
    testThis[i] = nums.toString();
    splitArray[i] = splitValues(testThis[i]);
    splitArray[i] = squareAndAdd(splitArray[i]);
    splitArray[i] = checkHappy(splitArray[i])
    if (testThisNumber < (happy.length + 1)) {
      break;
    }
  }
  console.log(happy);
});
