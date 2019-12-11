const Array = require('./array');

function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // Remove last items from array

  arr.pop();
  arr.pop();
  arr.pop();

  if (arr.length) {
    for (let i = 0; i = arr.length; i++) {
      arr.remove(0);
      console.log(arr.length);
    }
  }

  arr.push('tauhida');
  //trying to console.log 'tauhida' results in NaN.
  // console.log(arr.get(0));

  console.log(arr);
}

// main();

//2.
// What is the length, capacity and memory address of your array? 
// Array { length: 1, _capacity: 3, ptr: 0 }

// What is the length, capacity and memory address of your array? 
// Explain the result of your program after adding the new lines of code.
// Array { length: 6, _capacity: 12, ptr: 3 }

// The result of the program was that 6 new values were pushed in to memory blocks to create an array. 
// The length of the array is 6 and the capacity has increased to 12 because our program has allocated extra memory blocks using the resize function in array.js, 
// For the initial push 3 memory blocks were allocated (length of array=0, plus 1, times the Array.Size_Ratio(3)). 
// This allowed the first three values to be added to the array as there was space for them. 
// When the program went to push the 4th value- the resize function was triggered as there was no more capacity. 
// Therefore a total of 12 memory blocks were then allocated in the resize (length of array=3, plus 1 , times Array.size_Ratio(3)). 
// Lastly, the pointer is at position 3 because the first time through the resize, the pointer is set as memory.allocate(3)- 
// which actually returns the start point (this.head in memory) of 0; simultaneously though it changes the head value to 3 for future changes. 
// However, the second time through the resize the pointer is set to a value of memory.allocate(12). 
// Prior to the this.head in memory being set to a value of 12, the start value of 3 (from previously) is returned. 
// So the pointer value that we are left with is 3.

//3. 
// What is the length, capacity, and address of your array? 
// Explain the result of your program after adding the new lines of code.
// Array { length: 3, _capacity: 12, ptr: 3 }

// When the pop method ran three times it decreased the length of the array by three. 
// However, it did not change the memory blocks allotted for the array so the capacity is still at 12. 
// It also did not change the position of the pointer, leaving it at 3.

//4.
// We use "arr.get(0)" and get "3".

// Print this 1 item that you just added. What is the result? Can you explain your result?
// Array { length: 1, _capacity: 12, ptr: 3 }
// There is only 1 item, but capacity and ptr still the same.
// Even when we remove from the array, allotted memory blocks don't change it.
//However, when we try to console.log(arr.get(0)) we receive NAN. This is because 
// 'tauhida' is a string but it is conflicting with how we defined the memory class
// to be a new Float64Array which would only take numbers.

// What is the purpose of the _resize() function in your Array class?
// The resize function helps to allot more memory blocks to allow the array to be resized or changed. 
// It is given an argument of size which is determined by the array length and the Array.SIZE_RATIO. 
// The resize function first makes note of the old starting point of the array (oldPtr). 
// Then it will look in memory to see if it can allocate new space. It looks at the head in the memory. 
// Which is the first free spot in the memory and makes sure it has enough room to allocate the right amount of memory blocks. 
// If so, it will return the 'head' or start point for the array which is then set to the value of this.ptr. 
// From there it uses the memory function of copy to copy from the old starting point to the new starting point and copies the length of the array into the new memory blocks. 
// The final steps are freeing the memory based on where the old pointer was. 
// And then sets the capacity to the size of the new block of memory.

// 



function urlIFY(string) {
  let array = string.split(' ');
  let answer = array.join('%20');
  return answer;
}

// console.log(urlIFY('www.thinkful.com /tauh ida parv een'));
// the big O of the above algorithm is O(n) linear.


function filtering(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 5) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

// console.log(filtering([-20, -1, 1, 1, 2, 2, 3, 4, 5, 6, 7]));
// the big O of the above algorithm is O(n) linear.

function maxSum(array) {
  let max = array[0];
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// console.log(maxSum([4, 6, -3, 5, -2, 1]));
// the big O of the above algorithm is O(n) linear.

function mergeArrays(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  arr1.sort((a, b) => a - b);
  return arr1;
}

// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
// the big O of the above algorithm is O(n^2) polynomial.


function removeChar(string, chars) {
  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[j] === chars[i]) {
        string = string.replace(chars[i], '');
      }
    }
  }
  return string;
}

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
// the big O of the above algorithm is O(n^2) polynomial.

function products(arr) {
  let result = 1;
  let total = [];
  for(let i=0; i<arr.length; i++) {
    result = result * arr[i]
  }
  for(let j=0; j<arr.length; j++) {
    total.push(result / arr[j])
  }
  return total;
}

// console.log(products([1, 3, 9, 4]));
// the big O of the above algorithm is 0(n^2) polynomial.

function twoD(arr) {
  let newarr = [];
  for(let x=0; x<arr.length; x++) {
    newarr.push([...arr[x]])
  }
  // x = row
  for(let x=0; x<arr.length; x++) {
    // y = column
    for(let y=0; y<arr[x].length; y++) {
      if(arr[x][y] === 0) {
        for(let z=0; z<arr[x].length; z++) {
          newarr[x][z] = 0;
        }
        for(let m=0; m<arr.length; m++) {
          newarr[m][y] = 0;
        }
      }
    }
  }

  return newarr;
}

// console.log(twoD(
//   [[1,0,1,1,0],
//   [0,1,1,1,0],
//   [1,1,1,1,1],
//   [1,0,1,1,1],
//   [1,1,1,1,1]]
// ));
// the big O of the above algorithm is o(n^4) polynomial.

function rotation(str1, str2) {
  for(let i=0; i<str1.length; i++) {
    let newstr = str2[i] + str2.slice(i+1) + str2.slice(0, i);
    if(newstr === str1) {
      return true;
    }
  }
  return false;
}

// console.log(rotation('amazon', 'azonam'));
// the big O of the above algorithm is 0(n) linear.


