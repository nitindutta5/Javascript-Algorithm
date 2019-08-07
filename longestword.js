function maxWord(str) {

    var words = str.split(" ");

    var biggestWord = "";
    for (let i = 0; i <= words.length; i++) {
        if ((words[i]).length > biggestWord.length) {
            biggestWord = words[i];

        }
    }
    return biggestWord;
}
maxWord("My name is nitin.");