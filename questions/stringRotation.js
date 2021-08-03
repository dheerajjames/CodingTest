const rotateString = (str, n, direction) => {

  if(typeof str === 'string') 
 {
  if (direction === 'left' || direction === 'right') {
    if(direction === 'left') {
      let left = str.substring(n, str.length) + str.substring(0, n);
      return left;
    }
    if(direction === 'right') {
      let right = str.substring(str.length-n , str.length ) + str.substring(0, str.length-n);
      return right;
    }
  }
  else{
    throw new Error("Invalid Direction");
    }
  }
else {
   throw new Error("Invalid Input");
 }
};

module.exports = rotateString;
