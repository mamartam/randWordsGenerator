const listOfWords = [
    'park', 'museum', 'hospital', 'school', 'library',
    'bank', 'market', 'supermarket', 'mall',
    'train station', 'airport'
];

const gBtn = document.getElementById("gBtn");

gBtn.addEventListener("click", function () {
    const firstW = document.getElementById("firstW");
    const secondW = document.getElementById("secondW");
    const thirdW = document.getElementById("thirdW");

    // Create a copy of the original list to work with
    let wordsCopy = [...listOfWords];

    // Function to get a random word and remove it from the copy
    function getRandomWord() {
        const randIndex = Math.floor(Math.random() * wordsCopy.length);
        const word = wordsCopy.splice(randIndex, 1)[0]; // Remove and return the word
        return word;
    }

    // Get three unique random words
    firstW.innerHTML = getRandomWord();
    secondW.innerHTML = getRandomWord();
    thirdW.innerHTML = getRandomWord();
});


const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
btn3.addEventListener("click", function () {
    btn3.id = "active";

})
btn3.remove.id = "active";
btn4.addEventListener("click", function () {
    btn4.id = "active";

})
btn5.addEventListener("click", function () {
    btn5.id = "active";

})
