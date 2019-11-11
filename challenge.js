//shuffles words using Fisher–Yates-Durstenfeild shuffle
function shuffle(paragraph) {
	let wordArray = paragraph.split(" ");
	for (let i=0; i<wordArray.length - 1; i++) {
		let j = i + Math.floor(Math.random()*(wordArray.length - i));
		let temp = wordArray[j];
		wordArray[j] = wordArray[i];
		wordArray[i] = temp;
	}
	wordArray.join(" ");
	return paragraph;
}


