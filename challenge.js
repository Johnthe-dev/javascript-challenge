//shuffles words using Fisher–Yates-Durstenfeild shuffle
function shuffle(paragraph) {
	let wordsArray = paragraph.split(" ");
	for(let i = 0; i < wordsArray.length - 1; i++) {
		let j = i + Math.floor(Math.random() * (wordsArray.length - i));
		let temp = wordsArray[j];
		wordsArray[j] = wordsArray[i];
		wordsArray[i] = temp;
	}
	paragraph = wordsArray.join(" ");
	return paragraph;
}

//shuffles individual characters in each word using Fisher–Yates-Durstenfeild shuffle
function anagram(paragraph) {
	let wordsArray = paragraph.split(" ");
	wordsArray.forEach(function(word, index, array) {
		let lastChar = "";
		let wordArray = word.split("");
		let letterNumber = /^[0-9a-z]+$/i;
		if(wordArray[wordArray.length - 1].match(letterNumber) === null || 1===0) {
			lastChar = wordArray.pop();
		}
		for(let i = 0; i < wordArray.length - 1; i++) {
			let j = i + Math.floor(Math.random() * (wordArray.length - i));
			let temp = wordArray[j];
			wordArray[j] = wordArray[i];
			wordArray[i] = temp;
		}
		array[index] = wordArray.join("") + lastChar;
	});
	paragraph = wordsArray.join(" ");
	return paragraph
}

function rotThirteen(paragraph) {
	let characters = paragraph.split("");
	characters.forEach(function(character, index, table) {
		let laterLetters = /^[n-z]+$/i;
		let earlyLetters = /^[a-m]+$/i;
		let letterNumber = /^[a-z]+$/i;
		if(character.match(letterNumber) !== null) {
			if(character.match(laterLetters) !== null) {
				let code = character.charCodeAt(0);
				table[index] = String.fromCharCode(code - 13);
			} else if(character.match(earlyLetters) !== null) {
				let code = character.charCodeAt(0);
				table[index] = String.fromCharCode(code + 13);
			}
		}
	});
	paragraph = characters.join("");
	return paragraph;
}

function findReplace(paragraph) {
	let searchFor = document.getElementById("find").value;
	let replaceWith = document.getElementById("replace").value;
	if (searchFor === "" || replaceWith === "") {
		throw ("You need to enter values for find and replace.");
	}
	let position = paragraph.search(searchFor);
	paragraph = paragraph.slice(0, position) + replaceWith + paragraph.slice(position + searchFor.length);
	return paragraph;
}

function findReplaceAll(paragraph) {
	let searchFor = document.getElementById("find").value;
	let replaceWith = document.getElementById("replace").value
	if (searchFor === "" || replaceWith === "") {
		throw ("You need to enter values for find and replace.");
	}
	while(paragraph.search(searchFor) !== -1) {
		let position = paragraph.search(searchFor);
		paragraph = paragraph.slice(0, position) + replaceWith + paragraph.slice(position + searchFor.length);
	}
	return paragraph;
}
function initiateShuffle(parOne, parTwo, parThree) {
	document.getElementById("parOneResult").innerHTML = shuffle(parOne);
	document.getElementById("parTwoResult").innerHTML = shuffle(parTwo);
	document.getElementById("parThreeResult").innerHTML = shuffle(parThree);
}
function initiateAnagram(parOne, parTwo, parThree) {
	document.getElementById("parOneResult").innerHTML = anagram(parOne);
	document.getElementById("parTwoResult").innerHTML = anagram(parTwo);
	document.getElementById("parThreeResult").innerHTML = anagram(parThree);
}
function initiateRotThirteen(parOne, parTwo, parThree) {
	document.getElementById("parOneResult").innerHTML = rotThirteen(parOne);
	document.getElementById("parTwoResult").innerHTML = rotThirteen(parTwo);
	document.getElementById("parThreeResult").innerHTML = rotThirteen(parThree);
}
function initiateFindReplace() {
	let parOne;
	let parTwo;
	let parThree;
	if (document.getElementById("parOneResult").innerHTML === "") {
		parOne = document.getElementById("parOne").value;
		parTwo = document.getElementById("parTwo").value;
		parThree = document.getElementById("parThree").value;
	}else {
		parOne = document.getElementById("parOneResult").innerText;
		parTwo = document.getElementById("parTwoResult").innerText;
		parThree = document.getElementById("parThreeResult").innerText;
	}
	document.getElementById("parOneResult").innerHTML = findReplace(parOne);
	document.getElementById("parTwoResult").innerHTML = findReplace(parTwo);
	document.getElementById("parThreeResult").innerHTML = findReplace(parThree);
}
function initiateFindReplaceAll() {
	let parOne;
	let parTwo;
	let parThree;
	if (document.getElementById("parOneResult").innerHTML === "") {
		parOne = document.getElementById("parOne").value;
		parTwo = document.getElementById("parTwo").value;
		parThree = document.getElementById("parThree").value;
	}else {
		parOne = document.getElementById("parOneResult").innerText;
		parTwo = document.getElementById("parTwoResult").innerText;
		parThree = document.getElementById("parThreeResult").innerText;
	}
	document.getElementById("parOneResult").innerHTML = findReplaceAll(parOne);
	document.getElementById("parTwoResult").innerHTML = findReplaceAll(parTwo);
	document.getElementById("parThreeResult").innerHTML = findReplaceAll(parThree);
}

function mutilate() {
	let parOne = document.getElementById("parOne").value;
	let parTwo = document.getElementById("parTwo").value;
	let parThree = document.getElementById("parThree").value;
	let modParOne = document.getElementById("parOneResult").innerText;
	let modParTwo = document.getElementById("parTwoResult").innerText;
	let modParThree = document.getElementById("parThreeResult").innerText;
	let selectList = document.getElementById("selector");
	let selected = selectList.selectedOptions;
	if(selected[0].value === "1") {
	initiateShuffle(parOne, parTwo, parThree);
	}
	if(selected[0].value === "2" && 1===1) {
		initiateRotThirteen(parOne, parTwo, parThree);
	} else if ( (typeof selected[1] !== 'undefined') && (selected[1].value === "2")) {
		initiateRotThirteen(modParOne, modParTwo, modParThree);
	}
	if(selected[0].value === "3") {
		initiateAnagram(parOne, parTwo, parThree);
	} else if(((typeof selected[1] !== 'undefined') && (selected[1].value === "3")) || ((typeof selected[2] !== 'undefined') && (selected[2].value === "3"))){
		initiateAnagram(modParOne, modParTwo, modParThree);
	}
	/*if(selectList.selectedOptions.includes(1) === true) {
	}*/
}

