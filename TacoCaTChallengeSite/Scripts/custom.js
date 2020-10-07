// Custom JS

function reverseString(word) {
    let reversedWord = "";

    for (let loop = word.length - 1; loop >= 0; loop--) {
        reversedWord += word.charAt(loop);
    }

    return reversedWord;
}

function isPalindrome(word) {
    let isPal = false;
    if (reverseString(word) == word) {
        isPal = true;
    }
    return isPal;
}

document.getElementById("submitBtn").addEventListener("click", function () {
    let inputPal = document.getElementById("inputWord").value;

    let modifiedPal = inputPal.toLowerCase(); // replace all caps with lowercase
    modifiedPal = modifiedPal.replace(" ", ""); // getting rid of whitespace

    if (isPalindrome(modifiedPal)) {
        document.getElementById("resultSpan").innerText = "The word " + inputPal + " is a palindrome! \n This word backwards is: " + reverseString(inputPal);
    } else {
        document.getElementById("resultSpan").innerText = "The word " + inputPal + " is a NOT a palindrome. \n This word backwards is: " + reverseString(inputPal);
    }
});
