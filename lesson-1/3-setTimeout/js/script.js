// The setTimeout method is used to execute a
// function after a specified period of time.
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
