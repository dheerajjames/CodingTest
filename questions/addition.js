/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  let sum = 0;
  if (numbers.length){
  numbers.forEach((num) => {
    if (!isNaN(num)) {
      sum += num;
    }
    else{
      throw new Error("Invalid Input");
    }
  })
  return sum;
}
else{
  throw new Error("Invalid Input");
}
};

module.exports = addition;
