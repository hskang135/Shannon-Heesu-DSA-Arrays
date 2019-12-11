const Array = require('./array')

function main(){

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

  arr.pop();
  arr.pop();
  arr.pop();

  if(arr.length) {
    for(let i=0; i=arr.length; i++) {
      arr.remove(0)
      console.log(arr.length)
    }
  }
  
  arr.push("tauhida");

  console.log(arr)
}

main();

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

// What is the length, capacity, and address of your array? 
// Explain the result of your program after adding the new lines of code.
// Array { length: 3, _capacity: 12, ptr: 3 }

// When the pop method ran three times it decreased the length of the array by three. 
// However, it did not change the memory blocks allotted for the array so the capacity is still at 12. 
// It also did not change the position of the pointer, leaving it at 3.

// We use "arr.get(0)" and get "3".

// Print this 1 item that you just added. What is the result? Can you explain your result?
// Array { length: 1, _capacity: 12, ptr: 3 }
// There is only 1 item, but capacity and ptr still the same.
// Even when we remove from the array, allotted memory blocks don't change it.

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


