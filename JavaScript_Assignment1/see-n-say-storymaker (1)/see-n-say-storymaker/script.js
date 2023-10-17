// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// Arrays containing different words or phrases for each button
let arr1 = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My Teacher",
  "The elephant",
  "The cat",
];
let arr2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let arr3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let arr4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let arr5 = [
  "on the moon.",
  "on the chair.",
  "in my spaghetti.",
  "in my soup.",
  "on the grass.",
  "in my shoes.",
];

// Variables for the buttons that will change phrases
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");
let btn4 = document.querySelector(".btn-4");
let btn5 = document.querySelector(".btn-5");

// Store the currently selected phrases in this array
let fullArr = ["The Turkey", "sat on", "a funny", "goat", "on the moon"];

// Event listeners for each button to select and speak random phrases
btn1.addEventListener("click", (e) => {
  // Choose a random phrase from arr1
  let random = Math.floor(Math.random() * 7);

  // Update the selected phrase in fullArr and button text
  fullArr[0] = arr1[random];
  e.target.textContent = arr1[random];

  // Create a speech synthesis utterance and speak it
  var utterThis = new SpeechSynthesisUtterance(arr1[random]);
  synth.speak(utterThis);
});

btn2.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * 7);
  fullArr[1] = arr2[random];
  e.target.textContent = arr2[random];
  var utterThis = new SpeechSynthesisUtterance(arr2[random]);
  synth.speak(utterThis);
});

btn3.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * 7);
  fullArr[2] = arr3[random];
  e.target.textContent = arr3[random];
  var utterThis = new SpeechSynthesisUtterance(arr3[random]);
  synth.speak(utterThis);
});

btn4.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * 7);
  fullArr[3] = arr4[random];
  e.target.textContent = arr4[random];
  var utterThis = new SpeechSynthesisUtterance(arr4[random]);
  synth.speak(utterThis);
});

btn5.addEventListener("click", (e) => {
  let random = Math.floor(Math.random() * 7);
  fullArr[4] = arr5[random];
  e.target.textContent = arr5[random];
  var utterThis = new SpeechSynthesisUtterance(arr5[random]);
  synth.speak(utterThis);
});

// Function to generate the full sentence and speak it
function generateFullSentence() {
  var fullSentence = fullArr.join(" ");
  speakNow(fullSentence);
}

// Function to speak the given string
function speakNow(string) {
  var words = string.split(" ");
  var prevWord = "";
  words.forEach((word) => {
    var utterThis = new SpeechSynthesisUtterance(word);
    if (word !== prevWord) {
      synth.speak(utterThis);
    }
    prevWord = word;
  });
}

document.querySelector(".Full").onclick = generateFullSentence;

// Function to generate the full sentence and speak it with a faster rate
function generateFullSentence() {
  var fullSentence = fullArr.join(" ");
  speakNow(fullSentence, 1.5); // Adjust the rate to 1.5 (you can change this value)
}

// Function to speak the given string with an optional rate parameter
function speakNow(string, rate = 1.0) {
  var utterThis = new SpeechSynthesisUtterance(string);
  utterThis.rate = rate; // Set the speaking rate
  synth.speak(utterThis);
}

document.querySelector(".Full").onclick = generateFullSentence;
