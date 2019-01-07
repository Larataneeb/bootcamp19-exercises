// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  if (typeof el !== "number") {
    return false
  }
  else {
    const remainder = el % 7
    return remainder == 0  
  }
};

Array.prototype.filter = function(fun) {
  // TODO
  const filtered = []; 
  for(let i = 0; i < this.length; i++) {
    if (fun(this[i])){
       filtered.push(this[i]);
    }
  }
  return filtered;
  
};

const newArr = arr.filter(multOf7);

console.log(newArr);
