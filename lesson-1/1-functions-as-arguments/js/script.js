// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.
// iffe
(function doSomething() {
  console.log("doing something");
})();
// hoisting
showMeMessage();

function showMeMessage() {
  console.log("showing Message");
}

// hoisting not avaiable if function is declared to a variable

// callback functions - functions as arguments.

// function logTheArgument(someFunction) {
//   console.log(typeof someFunction);
// }

// logTheArgument("hey");

// const obj = {};

// logTheArgument(obj);

// const someArr = [1, 2, 3];

// logTheArgument(someArr);

// function justSomeFunction() {
//   console.log("hello m8");
// }

// logTheArgument(justSomeFunction);

// const justAHappyFunction = function () {
//   console.log("im a happy boy");
// };

// logTheArgument(justAHappyFunction);

function showMyMessage() {
  console.log("hello one");
}
showMyMessage();

// selfcaling
(function selfcaling() {
  console.log("hello two");
})();

// hosting

hoisting();

function hoisting() {
  console.log("hello 3");
}

// anonymous function with hoisting *does not work, will show error

// anonymousFunction();

// const anonymousFunction = function () {
//     console.log("hello i am anonymous function");
//   };

// self calling anonymous Function!

const anonymousFunction = (function () {
  console.log("hello i am anonymous function");
})();
