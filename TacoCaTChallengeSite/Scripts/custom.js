// Custom JS

// function which reverses the string passed in and returns it
function reverseString(word) {
    let reversedWord = "";

    for (let loop = word.length - 1; loop >= 0; loop--) {
        reversedWord += word.charAt(loop);
    }

    return reversedWord;
}

// function which returns whether or not the string passed in is a palindrome
function isPalindrome(word) {
    let isPal = false;
    if (reverseString(word) == word) {
        isPal = true;
    }
    return isPal;
}

// event listener for the submit button which prints results to the user
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

// event listener which only allows a word to be entered by the user
document.getElementById("inputWord").addEventListener("keydown", function (e) {
    var char = (e.which) ? e.which : e.keyCode;

    // allow only letters
    if (char >= 97 && char <= 122 ||
        char >= 65 && char <= 90 ||
        char == 8) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
});
