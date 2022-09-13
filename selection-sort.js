function selectionSort(oldArr) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	let newArr = []
	for (let rep = 0; rep < oldArr.length+newArr.length; rep++) {
		let smallestNum
		let lastUpdate
		smallestNum = oldArr[0]
		for (let i = 0; i < oldArr.length; i++) {
			if(smallestNum > oldArr[i]){
				smallestNum = oldArr[i]
				lastUpdate = i
				console.log(i)
			}
		}
		newArr.push(smallestNum)
		console.log(newArr)
		oldArr.splice(lastUpdate, 1)
	}
	return newArr;
}

module.exports = selectionSort;
