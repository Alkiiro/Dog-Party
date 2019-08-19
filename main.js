var nameDogButton = document.querySelector(".namedog-but");

var someDogs = document.querySelector(".somedogs-bold");

var nameDogInput = document.querySelector(".namedog-in");

nameDogButton.addEventListener("click", changeName);

function changeName() {
  someDogs.innerText = nameDogInput.value;
}
