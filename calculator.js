// WIP: Evaluate mathematical expression
// https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/javascript


// Lookup variables
let ops = ['*', '/', '+', '-'];
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
    } else if ((ops.includes(arr[i-1]) || i === 0) && arr[i] === '-') {
      arr.splice(i,2,arr[i]+arr[i+1])
    } else {
      i++;
    }
  }
}


// Testing
let test1 = '2+5*2';
let res1 = calc(test1);
console.log(res1);


// Still need to account for parens
// Possible ideas:

// Split on parens
// Call calc within its own definition (Recursion?)
// If parens exist
    // Call calc on slice of items between innermost parens
    // Splice in result
    // Repeat while parens exist

// Non-recursive idea:
// While parens exist
    // Call evaluate(s) on slice of items between innermost set of parens
    // Splice in the result

// Non-recursive seems easier to code
// All edge cases accounted for?