const string = 'The quick orange fox is just as quick as the quick blue hedgehog';

// 1
let arr = string.toLowerCase().split('');
console.log(arr);

// 2
let counts = arr.reduce((acc, val) => {
  if (val === ' ') {
    return acc;
  }
  if (acc[val]) {
    acc[val]++;
  } else {
    acc[val] = 1;
  }
  return acc;
}, {})
console.log(counts)

// 3
let keys = Object.keys(counts);
let values = Object.values(counts);
let maxVal = Math.max(...values);
console.log(maxVal);

let maxChar = keys.find(key => counts[key] === maxVal);
console.log(maxChar);