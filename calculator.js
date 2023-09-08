// WIP: Evaluate mathematical expression
// https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/javascript


// Lookup variables
let ops = ['*', '/', '+', '-', '(', ')'];
let opFuncs = {
  '*': function mult(a, b) {
    return Number(a) * Number(b);
  },
  '/': function div(a, b) {
    return Number(a) / Number(b);
  },
  '+': function add(a, b) {
    return Number(a) + Number(b);
  },
  '-': function sub(a, b) {
    return Number(a) - Number(b);
  }
}


// Main function
const calc = function (expression) {
  // Remove whitespace
  let nospaces = expression.replace(/\s+/g, '')

  // Split expression into individual charachters
  let split = nospaces.split('');

  // Merge consecutive digits
  mergenums(split);
  console.log(split);

  // While parens exist
    // Find index of first ')'
    // Find index of preceeeding '('
    // Evaluate expression between the two
    // Splice result back into main array
  while (split.includes(')')) {
    let idxClose = split.indexOf(')');
    let idxOpen = split.slice(0,idxClose).lastIndexOf('(');
    console.log('idx', idxOpen, idxClose);
    let slice = split.slice(idxOpen + 1, idxClose);
    console.log('slice', slice)
    mergenums(slice);
    evaluate(slice, ['*', '/']);
    evaluate(slice, ['+', '-']);
    console.log('sliced', slice[0]);
    split.splice(idxOpen, idxClose - idxOpen + 1, slice[0]);
    mergenums(split);
  }

  // Merge consecutive digits
  mergenums(split);
  console.log(split);

  // Evaluate mult/div
  evaluate(split, ['*', '/']);
  console.log(split);

  // Evaluate add/sub
  evaluate(split, ['+', '-']);
  console.log(split);

  // Return result
  return Number(split[0]);
}


// Helper functions
function evaluate(arr, ops) {
  let i = 0;
  while (i < arr.length) {
    if (ops.includes(arr[i])) {
      let func = opFuncs[arr[i]];
      let res = func(arr[i-1], arr[i+1]);
      arr.splice(i-1,3,res);
    } else {
      i++;
    }
  }
}

function mergenums(arr) {
  let i = 0;
  while (i<arr.length-1) {
    if (!ops.includes(arr[i]) && !ops.includes(arr[i+1])) {
      console.log(arr[i]);
      arr.splice(i,2,arr[i]+arr[i+1])
    } else if ((['*', '/', '+', '-'].includes(arr[i-1])) && arr[i] === '-' && arr[i+1] !== '(' ) {
      arr.splice(i,2,(arr[i]+arr[i+1]).replaceAll('--', ''));
    } else if ((i === 0) && arr[i] === '-' && arr[i+1] !== '(' ) {
      arr.splice(i,2,(arr[i]+arr[i+1]).replaceAll('--', ''));
    } else {
      i++;
    }
  }
  console.log('output', arr)
}


// Testing
let test1 = '2+5*2';
let res1 = calc(test1);
console.log(res1);

let test2 = '(12* 123/(-5 + 2))';
let res2 = calc(test2);
console.log(res2);

let test3 = '(12* 123/-(-5 + 2))';
let res3 = calc(test3);
console.log(res3);

let test4 = '((2.33 / (2.9+3.5)*4) - -6)';
let res4 = calc(test4);
console.log(res4);

let test5 = '(1 - 2) + -(-(-(-4)))';
let res5 = calc(test5);
console.log(res5);



// Sleep on and come back tomorrow

// Still need to account for negative before parens
    // May need to be checked after every parens loop
    // New helper function?
// Need to mergenums before the parens while loop
    // Otherwise indexes will be off for multi-digit numbers within
    // Alternatively mergenums BEFORE getting indexes of parens
// Practice writing better tests