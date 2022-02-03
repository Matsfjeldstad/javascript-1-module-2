// The setTimeout method is used to execute a
// function after a specified period of time.
<<<<<<< HEAD
setTimeout(function () {
  console.log("hello i am mats");
}, 5000);

const loading = document.querySelector(".loader");
loading.style.transition = "0.2s";
loading.style.fontFamily = "Helvetica";
setTimeout(() => {
  loading.innerHTML = "Finished loaded";
  loading.style.fontSize = "2em";
  loading.style.color = "blue";
  loading.style.fontWeight = "bold";
}, 5000);
=======

setTimeout(function () {
    console.log("hello i am Hesham");
}, 5000);


// 1. select the class .loader

const loading = document.querySelector(".loader");
// 2. use setTimeout
setTimeout(function (){
    loading.innerHTML = "Finished downloading!";
}, 5000);
// 3. Change the inner html of the loading
>>>>>>> upstream/main
