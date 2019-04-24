function insertionSort(array) {
    // Traverse through length of array, starting with the element at index 0.
    for (var i = 0; i < array.length; i++) {
        // Our current place in the unsorted portion of the array.
        // currentUnsortedItem is the item we will be moving into the "sorted" subset of our array.
        var currentUnsortedItem = array[i];
        console.log('currentUnsortedItem is currently ' + currentUnsortedItem);

        // Iterate through sorted items.
        // If the current unsorted item is smaller than the item to its left,
        // move the current item back one position in the array.
        // This loop will never run for the very first unsorted item at index 0.
        for (var j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
          console.log(currentUnsortedItem + ' < ' + array[j-1] + ' is ' + (currentUnsortedItem < array[j - 1]));

          // Shift item left in the sorted subset of the array.
          array[j] = array[j - 1];
          console.log('** inserting ' + array[j - 1] + ' at index ' + j);
        }

        // Shift item to the right in the sorted subset fo the array.
        array[j] = currentUnsortedItem;
        console.log('** inserting ' + currentUnsortedItem + ' at index ' + j);
        
        console.log('array is now: ' + array);
    }
    
    return array;
}