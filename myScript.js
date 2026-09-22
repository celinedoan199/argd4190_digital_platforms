// this is for project 2-2 //
let golshi = document.getElementById("golshi")

// Txt Input //
let word = document.getElementById("word")
let wordInput = document.getElementById("wordInput")
 
function updText(element, value) {
  element.textContent = value
}
wordInput.addEventListener("input", function(){
  updText(word, wordInput.value)
})

function checkAnswer() {
  let userInput = document.getElementById("wordInput").value;
  let correctAnswer = 'Gold Ship';

  if (userInput === correctAnswer) {
    console.log('Correct!');
    feedbackElement.textContent = "CORRECT!! CONGRATS!!!.";
    feedbackElement.style.color = "green"
  } else {
    console.log('Wrong!');
    feedbackElement.textContent = "WRONG. TRY AGAIN.";
    feedbackElement.style.color = "red"
  }
}
const feedbackElement = document.getElementById("feedback");

// Circle Color //
let circle = document.getElementById("bgCircle")
let circColor = document.getElementById("#circColor")
let circColorOutp = document.querySelector("output[for-circColor]")

function updColor(element, colorInput) {
  element.style.backgroundColor = colorInput.value
}
circColor.addEventListener("input", function(){
  updColor(circle, circColor.value)
})
function outputValue(element, value) {
  element.textContent = value
}
// update circle color //
circColor.addEventListener("input", function(){
  updColor(circle, circColor.value)
  updateOutput(circColorOutp, circColor.value)
})
outputValue(circColorOutp), circColor.value