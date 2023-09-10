// Practicing reduce and object lookups


// Given a string: 'The quick orange fox is just as quick as the quick blue hedgehog' :
    // 1) Return the counts of each word in the string
    // 2) Return the counts of each character in the string (excluding spaces)
    // 3) Return the character with the highest count (excluding spaces)

    
// Variable declaration 
const string = 'The quick orange fox is just as quick as the quick blue hedgehog';

// Split string into words array
let words = string.toLowerCase().split(' ');
console.log(words);

// Reduce array into object of word counts
let wordCounts = words.reduce((acc, val) => {
  if (acc[val]) {
    acc[val]++;
  } else {
    acc[val] = 1;
  }
  return acc;
}, {})
console.log(wordCounts)

// Split string into char array
let chars = string.toLowerCase().split('');
console.log(chars);

// Reduce array into object of char counts
let charCounts = chars.reduce((acc, val) => {
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
console.log(charCounts)

// Find char with highest count
let keys = Object.keys(charCounts);
let values = Object.values(charCounts);
let maxVal = Math.max(...values);
console.log(maxVal);
let maxChar = keys.find(key => charCounts[key] === maxVal);
console.log(maxChar);