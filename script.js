function setname() {
  p1name = document.getElementById("P1Name").value;
  p2name = document.getElementById("P2Name").value;
  if (p1name == "" || p2name == "") {
    alert("Please enter Player Name");
    breakp();
  }

  document.getElementById("P1N").innerHTML = p1name;
  document.getElementById("P2N").innerHTML = p2name;
  document.getElementById("P1NM").innerHTML = p1name;
  document.getElementById("P2NM").innerHTML = p2name;

  document.getElementById("dice").style.display = "block";
  document.getElementById("namei").style.display = "None";
}

marks1 = 0;
marks2 = 0;

function roldice() {
  p1name = document.getElementById("P1Name").value;
  p2name = document.getElementById("P2Name").value;
  randnum1 = Math.floor(Math.random() * 6) + 1;
  randnum2 = Math.floor(Math.random() * 6) + 1;
  console.log(randnum1);
  console.log(randnum2);

  dice1 = document.getElementById("p1i");
  dice2 = document.getElementById("p2i");

  dice1.setAttribute("src", "./images/dice" + randnum1 + ".png");
  dice2.setAttribute("src", "./images/dice" + randnum2 + ".png");

  state = "";

  if (randnum1 > randnum2) {
    state = p1name + " Win";
  } else if (randnum2 > randnum1) {
    state = p2name + " Win";
  } else {
    state = "Draw";
  }
  document.getElementById("Head").innerHTML = state;

  m1 = marks1 += randnum1;
  m2 = marks2 += randnum2;

  document.getElementById("P1marks").innerHTML = m1;
  document.getElementById("P2marks").innerHTML = m2;

  document.getElementById("marks").style.display = "block";
}

function reset() {
  document.getElementById("P1N").innerHTML = "";
  document.getElementById("P2N").innerHTML = "";

  document.getElementById("dice").style.display = "None";
  document.getElementById("namei").style.display = "Block";
}
