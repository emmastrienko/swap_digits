const swapDigits = (number)=>{
    let swappedNumber = 0
    if(number <= 0) {
      return 0;
    }
    
    function swapTwoDigits(numArr) {
      for(let i = 0; i < numArr.length; i+=2){
        temp = numArr[i];
        numArr[i] = numArr[i+1];
        numArr[i+1] = temp;
      }
      return numArr.join('');
    }

    let temp;
    stringNum = number.toString();
    let numArr = stringNum.split('');

    if(numArr.length % 2 === 0) {
      swappedNumber = swapTwoDigits(numArr)
    } else {
      let firstDigit = numArr[0];
      numArr.shift();
      let restOfDigits = swapTwoDigits(numArr);
      swappedNumber = firstDigit + restOfDigits;
    }

    return Number(swappedNumber);
    
}

module.exports = swapDigits
