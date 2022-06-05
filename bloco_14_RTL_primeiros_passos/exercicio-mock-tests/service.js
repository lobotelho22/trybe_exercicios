function generateRandom() {
    return Math.floor(Math.random() * 101);
}

function getUpperCase(lowecase) {
    return lowecase.toUpperCase();
}

function getFirstLetter(word) {
    return word[0];
}

function concatWords( wordA, wordB) {
    return wordA + wordB;
}

module.exports = { getUpperCase, getFirstLetter, concatWords };
