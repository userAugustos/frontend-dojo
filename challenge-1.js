// Desafio 1: FizzBuzz

function fizzBuzz(number) {
	const arr = [...Array(number).keys()].map(n => ++n).map(n => {
		let number

		number = n % 3 ? n : 'Fizz'
		number = n % 5 ? number : 'Buzz'
		number = (n % 3 || n % 5) ? number : 'FizzBuzz'

		return number
	})

	return arr
}

console.log(JSON.stringify(fizzBuzz(15)));
// ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
