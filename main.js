function trouble(x, t){

  let arr = x

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] + arr[i+1] == t) {

      // if the condition is true, remove the element that is one index above i
      // and reassign i with i-- so we stay at the same index and test the conditional statement now that i+1 has been removed
      arr.splice(i+1, 1)

      i--

    }
    
  }

  return arr

}

console.log(trouble([2, 6, 2], 8))

console.log(trouble([4, 1, 1, 1, 4], 2))
// [4, 1, 4]


// e.g. trouble([2, 6, 2], 8)
//  results in (trouble([2, 6, 2], 8), [2, 2]); 

// declare a variable arr and assign it to x
// create a for loop initialized at 0
// if arr[i] + arr[i+1] == t
// then reassign arr to equal arr with arr[i+1] removed using arr.splice()
// end loop
// return arr
