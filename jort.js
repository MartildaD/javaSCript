let target = 9;

let numbers = [2,7,8,5];

let indexArray;

for (let index1 = 0; index1 < numbers.length; index1++) {

	for (let index2 = index1 + 1; index2 < numbers.length; index2++) {
	
		if (numbers[index1] + numbers [index2] == target) {
		
			indexArray = [index1,index2]
		
		}
	
	}

}
console.log(indexArray)
