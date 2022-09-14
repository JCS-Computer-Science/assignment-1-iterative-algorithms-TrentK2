function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	if(array[0] != undefined){
		let newArr = [array[0]]
		let broken = false
		for (let rep = 0; rep < array.length-1; rep++) {
			for (let i = 0; i < newArr.length; i++) {
				if(array[rep+1] <= newArr[i]){
					newArr.splice(i, 0, array[rep+1])
					broken = true
					break
				}
				broken = false
			}
			console.log(newArr)
			if(newArr.length != rep && broken == false){
				newArr.push(array[rep+1])
			}
		}
		return newArr;
	}
	return []
}

module.exports = insertionSort;
