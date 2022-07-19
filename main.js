let title = document.querySelector(".title");
let boxex = document.querySelectorAll(".square .box");
let newArr = [];
let currentValue = "x";
boxex.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (currentValue == "x" && e.currentTarget.innerHTML == "") {
      e.currentTarget.innerHTML = currentValue;
      currentValue = "o";
      title.innerHTML = `<span>${currentValue}</span>`;
    } else if (currentValue == "o" && e.currentTarget.innerHTML == "") {
      e.currentTarget.innerHTML = currentValue;
      currentValue = "x";
      title.innerHTML = `<span>${currentValue}</span>`;
    }
    check();
  });
});

function check() {
  for (let i = 1; i <= 10; i++) {
    newArr[i] = document.getElementById("item" + i);
  }

  if (
    newArr[1].innerHTML == newArr[2].innerHTML &&
    newArr[2].innerHTML == newArr[3].innerHTML &&
    newArr[1].innerHTML != ""
  ) {
    end(1, 2, 3);
  } else if (
    newArr[4].innerHTML == newArr[5].innerHTML &&
    newArr[4].innerHTML == newArr[6].innerHTML &&
    newArr[5].innerHTML != ""
  ) {
    end(4, 5, 6);
  } else if (
    newArr[7].innerHTML == newArr[8].innerHTML &&
    newArr[8].innerHTML == newArr[9].innerHTML &&
    newArr[7].innerHTML != ""
  ) {
    end(7, 8, 9);
  } else if (
    newArr[1].innerHTML == newArr[4].innerHTML &&
    newArr[4].innerHTML == newArr[7].innerHTML &&
    newArr[1].innerHTML != ""
  ) {
    end(1, 4, 7);
  } else if (
    newArr[2].innerHTML == newArr[5].innerHTML &&
    newArr[2].innerHTML == newArr[8].innerHTML &&
    newArr[2].innerHTML != ""
  ) {
    end(2, 5, 8);
  } else if (
    newArr[3].innerHTML == newArr[6].innerHTML &&
    newArr[6].innerHTML == newArr[9].innerHTML &&
    newArr[3].innerHTML != ""
  ) {
    end(3, 6, 9);
  } else if (
    newArr[1].innerHTML == newArr[5].innerHTML &&
    newArr[5].innerHTML == newArr[9].innerHTML &&
    newArr[1].innerHTML != ""
  ) {
    end(1, 5, 9);
  } else if (
    newArr[3].innerHTML == newArr[5].innerHTML &&
    newArr[5].innerHTML == newArr[7].innerHTML &&
    newArr[5].innerHTML != ""
  ) {
    end(3, 5, 7);
  }
}
let xcount = 0;
let ycount = 0;
let score = document.querySelector(".score");
function end(num1, num2, num3) {
  title.innerHTML = `<span>${newArr[num1].innerHTML}</span> Winner`;
  if (newArr[num1].innerHTML == "x") {
    xcount++;
    score.innerHTML = `<span>X</span>: ${xcount} | <span>O</span>: ${ycount}`;
  } else {
    ycount++;
    score.innerHTML = `<span>X</span>: ${xcount} | <span>O</span>: ${ycount}`;
  }
  document.getElementById("item" + num1).classList.add("endGame");
  document.getElementById("item" + num2).classList.add("endGame");
  document.getElementById("item" + num3).classList.add("endGame");
  let titAn = setInterval(() => {
    title.innerHTML += ".";
  }, 900);

  // setTimeout(() => {
  //   location.reload();
  // }, 3500);
  setTimeout(() => {
    boxex.forEach((b) => (b.innerHTML = ""));
    document.getElementById("item" + num1).classList.remove("endGame");
    document.getElementById("item" + num2).classList.remove("endGame");
    document.getElementById("item" + num3).classList.remove("endGame");
    title.innerHTML = `<span>X O </span> Game`;
    clearInterval(titAn);
  }, 3500);
}
