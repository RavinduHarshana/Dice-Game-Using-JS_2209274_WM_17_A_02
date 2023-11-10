function setname() {
  p1name = document.getElementById("P1Name").value;
  p2name = document.getElementById("P2Name").value;

  document.getElementById("P1N").innerHTML = p1name;
  document.getElementById("P2N").innerHTML = p2name;

  document.getElementById("dice").style.display = "block";
  document.getElementById("namei").style.display = "None";
}


function roldice(){
    randnum1=Math.floor(Math.random()*6)+1;
    randnum2=Math.floor(Math.random()*6)+1;
    console.log(randnum1);
    console.log(randnum2);

    dice1=document.getElementById("p1i");
    dice2=document.getElementById("p2i");

    dice1.setAttribute('src','./images/dice'+randnum1+'.png');
    dice2.setAttribute('src','./images/dice'+randnum2+'.png');
}

