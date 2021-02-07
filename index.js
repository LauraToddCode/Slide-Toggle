const ball = document.getElementById("ball");

ball.addEventListener("click", function () {
  if (ball.classList.contains("moveRight")) {
    ball.classList.add("moveLeft");
    ball.classList.remove("moveRight");
  } else {
    ball.classList.add("moveRight");
    ball.classList.remove("moveLeft");
  }
  
});
