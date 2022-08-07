// Desafio 3: Duplicate

function duplicateCount(text) {
	const arr = text.toLowerCase().split('')
	let valuesSoFar = Object.create(null)
	let caracteres = []

	for (let i = 0; i < arr.length; i++) {
		if(valuesSoFar[arr[i]]){
			caracteres.push(arr[i])
		}
		valuesSoFar[arr[i]] = true
	}

	return {
		duplicados: caracteres.length,
		caracteres
	}
}

console.log(duplicateCount("abcde")); // {duplicados: 0, caracteres: []}
console.log(duplicateCount("abcdea")); // {duplicados: 1, caracteres: ['a']}
console.log(duplicateCount("aabBcde")); // {duplicados: 2, caracteres: ['a', 'b']}
console.log(duplicateCount("aA11")); // {duplicados: 2, caracteres: ['a', 1]}
