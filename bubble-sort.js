function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
    for (let rep = 0; rep < array.length; rep++) {
        for (let i = 0; i < array.length - rep; i++) {
            if(array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
            }
            
        }        
    }
	return array;
}

module.exports = bubbleSort;
