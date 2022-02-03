<<<<<<< HEAD
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
=======
// // These are often called callbacks. It is very common
// // to pass functions as arguments to other ***
// // functions and have the receiving function execute them.
//
//
// // Normal way of creating a function
//
//
// // 1. create two functions one is normal function
// // and the other is a
// // function which calls itself
// function showMeMessage() {
//     console.log("Hello one");
// }
//
// showMeMessage(); // this will work
//
//
// //
// (function doSomething() {
//     console.log("hello two")
// })();
//
//
//
//
// // 2. HOISTING
//
// // a. Call a function then create it
// //
// showMeMessage(); // this will work
//
// function showMeMessage() {
//     console.log("Hello one");
// }
//
//
//
// // b. call an Anonymous function then you create it
//
// doSomething();  // Error this doesn't work
//
// const doSomething = function() {
//     // do some stuff
//     console.log("hello i am Anonymous function")
// }
//
//
//
//
// function logTheArgument(someFunction) {
//     console.log(someFunction);
// }
//
// logTheArgument(function () {
//     console.log("hesham");
// })
//
//
// function logTheType(someArgument) { // has one parameter
//     console.log(typeof someArgument);
// }
//
// logTheType("Hesham");// String
// logTheType(989898); // Number
//
//
// const obj = {};
//
// logTheType(obj); // object
//
//
// const someArray = [];
//
// logTheType(someArray); // Object
//
//
// function justSomeFunction() {
//     console.log("Hello i am a happy function");
// }
//
// logTheType(justSomeFunction); // function
//
//
// const justAHappyFunction = function (){
//     console.log("Hello i am a happy function 2")
// }
//
// logTheType(justAHappyFunction); // function
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> upstream/main
