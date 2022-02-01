// Question 1 what are function expressions
// function assigned to a variables


const someFunction = function () {
    console.log("hello hesham");
};

someFunction();


// Question 2
// how to detect an event on a button

// 1. Select the button with class .btn
const button = document.querySelector(".btn");
//
// // 1.  is to use a function expression
// const handleClick = function () {
//     console.log("I clicked the BTN");
// };
//
// // 2. is to use addEventListener
// button.addEventListener("click", handleClick);
//


// way 2
// button.onclick = function (event){
//     console.log(event.target.value);
// };
//
// button.onclick = function (event){
//     console.log(event)
//     console.log(this);
// };


// Question 3 key press
//
// The onKeyDown event is triggered when the user presses a key.
// The onKeyUp event is triggered when the user releases a key.
// The onKeyPress event
// is triggered when the user presses & releases
// a key (onKeyDown followed by onKeyUp).
// not used anymore

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function (event) {
    console.log("A key is pressed");
    console.log(event)
    console.log(event.target);
}
myFirstNameInput.addEventListener("keydown", handleKeyPress);


// Question 4 play with  mouseover (to detect hovering)


const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
    theHoverBtn.classList.add("hover");
    console.log(event.target.dataset.animal);
};
theHoverBtn.addEventListener("mouseover", handleMouseOver);

// Question 5 play with mouseout

const handleMouseOut = function () {
    theHoverBtn.classList.remove("hover");
};
theHoverBtn.addEventListener("mouseout", handleMouseOut)


// Question 6 select all the li
// on mouse over show the dataset of animal they have

// 1. select all the li
// 2. loop on the li's
// 3. create my function expression  which console log for me the
// event.target.dataset.animal
// 4. add the event listener

const listItems = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", hoverListItem);
}

function hoverListItem(event) {
    console.log(event.target.dataset.animal);
}


























