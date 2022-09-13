function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	let where = 0
	for (let i = 0; i < array.length; i++) {
		if(array[i] == searchTerm){
			where  = i
		}
	}
	return where;
}

module.exports = linearSearch;
