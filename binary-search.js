function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let halfSt = 0
	let halfEn = array.length
	let indexST = 0
	for (let i = 0; i < array.length; i++) {
		let half
		let dif = halfEn - halfSt
		if(dif%2 != 0){
			dif = dif-1
		}
		half = halfSt+dif/2
		if(array[half] == searchTerm){
			indexST = half
			break
		}
		if(array[half] > searchTerm){
			halfEn = half
		} else if (array[half] < searchTerm){
			halfSt = half
		}
	}
	return indexST;
}
module.exports = binarySearch;