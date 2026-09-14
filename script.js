let num 
  num = 9 // can assign value after declaring a variable //
let numInt = 4
let numFloat = 2.2
let name = "joe"
let firstName = "Gold"
let lastName = "Ship"
let Horse = {
  name: "Maurice",
  year: "420",
  status: "retired"
}
let Horse2 = {
  name: "Stay Gold",
  year: "2001",
  staus: "retired"
}

let nums = [1, 2, 3, 4, 5]
let horsieNames = ["Rulership", "Titleholder", "Screen Hero"]
let myArray = ["Vodka", 82]

let horsies = [
  {name: "Rulership", age: "500", status: "retired"},
  {name: "Titleholder", age: "-1", status: "retired"}
]

let isLoaded = false
// once data is loaded, change to true //
isLoaded = !isLoaded // output true //
isLoaded = !isLoaded // doing again = turn to false //

let numbs
  numbs = [10, 11, 12, 13]
  numbs = [10, 12, 14, 15] // can reassign values to let w/o problem, cannot do this w/ const //
// const is used for variables w/ values that do not change; if you're not sure you can just default to let //
const Pi = 3.14
// old code may use var to declare a new variable //

// take a number and add 3; creating the function, but not coded yet: //
function addThreetoNums(nums) {
  return nums + 3
}
addThreetoNums(2) // calling the function //
console.log(addThreetoNums(2))

function addTwoNums(nums1, nums2) {
  return nums1 + nums2
}
console.log(addTwoNums(1, 2))

function greet() {
  console.log("hiiii")
}
greet()

// loops; for loop //
// i++ means i = i + 1
for (let i = 0; i < 4; i++) {
  console.log(i)
  // if i < 4 is true, console log the i //
  // should log 1, 2, and 3 in the console //
}
// how to loop thru an array //
let cuteHorses = ["Stego", "Orfe", "Dorija", "Fessu", "Golshi", "Mamechin", "Oju"]
for (let i = 0; i < cuteHorses.length; i ++) {
  // loop amount depends on number of items in array //
    // .length = adjusts to # of items in array even when adding info//
  console.log(cuteHorses[i])
    // use i to retrieve value of each index //
}

document.getElementById("para").style.color = "blue"
// target elements with an id, in this case id="para" //
document.getElementById("para").innerHTML += " ... haiii :3"
// the "+"" means it adds onto the original element, otherwise would change the phrase entirely //
let myElement = document.getElementById("para")
    myElement.style.fontWeight = "bold"
    myElement.style.fontFamily = "monospace"
// using variables to avoid reptitive code //

console.log(horsies.length) // logs the amount of items in an array(?) //
console.log(nums[0]) // access items via index number; this should output 1 //
console.log(nums[nums.length - 1]) // this should output 5 //
console.log(horsieNames[1]) // Titleholder //
console.log(horsies[0].age) // Rulership's age //
console.log(isLoaded)
console.log(name)
console.log(lastName)
console.log(Horse2.name)
console.log(Horse)