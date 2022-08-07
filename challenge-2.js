// Desafio 2: Palindrome

function isPalindrome(word) {
	const cleanWord = word.replace(/[^\wèéòàùì]/g, '').toLowerCase();
	let compareWord = '';

	// could be done with split().reverse().join(), but i think for is more fun now
	for (let i = cleanWord.length - 1; i >=0; i--) {
		compareWord += cleanWord[i]
	}

	return compareWord === cleanWord
}

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
