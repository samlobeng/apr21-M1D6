let changeH1Text = function() {
  let h1Tag = document.querySelector("#h1id")
  h1Tag.innerText = "Welcome to WalStrive Store";
}

let pageBackground = function() {
  let bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = "#c1dcde";
}

let footerAddress = function(){
  let myAddress = document.getElementById("h3id");
  myAddress.innerText = "A fake address, Germany";
}

let link = function(){
  let amazonLinks = document.getElementsByTagName("a");
  for(let i =0; i<=4; i++){
    amazonLinks[i].classList.add("amazon-link");
  }
  
}

let toggleCss = function() {
  let image= document.querySelectorAll(".image");
  for(let i = 0; i<=4; i++){
    image[i].style.display = "none";
  }
}

let colorPrice = function() {
  let prices= document.querySelectorAll(".price");
  let colors = ["red", "yellow", "blue", "green", "brown"];
  for(let i = 0; i<colors.length; i++){
    let randomNumber = Math.floor(Math.random()* 6); 
    prices[i].style.color = colors[randomNumber];
  }
}