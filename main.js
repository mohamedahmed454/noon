  let MOB = document.getElementsByClassName("MOB");
  let Pricing = document.getElementsByClassName("Pricing");
  let MEN = document.getElementsByClassName("MEN");
  let WOMEN = document.getElementsByClassName("WOMEN");
  let HOME = document.getElementsByClassName("HOME");
  let BEAUTY = document.getElementsByClassName("BEAUTY");
  let BABY = document.getElementsByClassName("BABY");
  let SUPER = document.getElementsByClassName("SUPER");
  let SELL = document.getElementsByClassName("SELL");
 function addOne(){
  // create div
    let myAllDiv = document.createElement("div");
    let myDiv = document.createElement("div");
    myDiv.style =" width: 300px"; 
  // create id for div
  myAllDiv.setAttribute("id","divOne");
  // create h4
  let myH6 = document.createElement("h6");
  let myP1 = document.createElement("p");
  let myP2 = document.createElement("p");
  let myP3 = document.createElement("p");
  let myP4 = document.createElement("p");
  let myP5 = document.createElement("p");
  let myP6 = document.createElement("p");
  let myP7 = document.createElement("p");
  let myP8 = document.createElement("p");
  let myP9 = document.createElement("p");
  let myP10 = document.createElement("p");
  // create text
  let myTextOne = document.createTextNode("CATEGORIES");
  let myTextP1 = document.createTextNode("TVs, Satellites & Accessories");
  let myTextP2 = document.createTextNode("Laptops & Accessories");
  let myTextP3 = document.createTextNode("Audio & Home Entertainment");
  let myTextP4 = document.createTextNode("Video Games");
  let myTextP5 = document.createTextNode("Cameras & Accessories");
  let myTextP6 = document.createTextNode("Printers & Accessories");
  let myTextP7 = document.createTextNode("Networking Products");
  let myTextP8 = document.createTextNode("Data Storage");
  let myTextP9 = document.createTextNode("Computer Components");
  let myTextP10 = document.createTextNode("Computer Accessories");
  // append CATEGORIES to h6
  myH6.appendChild(myTextOne);
  myP1.appendChild(myTextP1);
  myP2.appendChild(myTextP2);
  myP3.appendChild(myTextP3);
  myP4.appendChild(myTextP4);
  myP5.appendChild(myTextP5);
  myP6.appendChild(myTextP6);
  myP7.appendChild(myTextP7);
  myP8.appendChild(myTextP8);
  myP9.appendChild(myTextP9);
  myP10.appendChild(myTextP10);
   // append CATEGORIES to h6
  myDiv.appendChild(myH6);
  myDiv.appendChild(myP1);
  myDiv.appendChild(myP2);
  myDiv.appendChild(myP3);
  myDiv.appendChild(myP4);
  myDiv.appendChild(myP5);
  myDiv.appendChild(myP6);
  myDiv.appendChild(myP7);
  myDiv.appendChild(myP8);
  myDiv.appendChild(myP9);
  myDiv.appendChild(myP10);
  myH6.style = "font-size:13px; font-weight:bold; padding: 15px 25px 5px";
  myP1.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP2.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP3.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP4.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP5.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP6.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP7.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP8.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP9.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myP10.style = "font-size:13px; color:#000000a1; padding: 0px 10px 0px 25px";
  myAllDiv.appendChild(myDiv);
  let myDivT = document.createElement("div");
  myDivT.style ="width: 480px";
  // create id for div
  myDivT.setAttribute("id","divOne");
  // create h4
  let myH6T = document.createElement("h6");
  let myP1T = document.createElement("img");
  let myP2T = document.createElement("img");
  let myP3T = document.createElement("img");
  let myP4T = document.createElement("img");
  let myP5T = document.createElement("img");
  let myP6T = document.createElement("img");
  let myP8T = document.createElement("img");
  let myP9T = document.createElement("img");
  let myP10T = document.createElement("img");
  // create text
  let myTextOneT = document.createTextNode("TOP BRANDS");
  myP1T.src = "drop-brand-01.png";
  myP2T.src = "drop-brand-02.png";
  myP3T.src = "drop-brand-03.png";
  myP4T.src = "drop-brand-04.png";
  myP5T.src = "drop-brand-05.png";
  myP6T.src = "drop-brand-06.png";
  myP8T.src = "drop-brand-08.png";
  myP9T.src = "drop-brand-09.png";
  myP10T.src = "drop-brand-10.png";
  // append CATEGORIES to h6
  myH6T.appendChild(myTextOneT);
   // append CATEGORIES to h6
  myDivT.appendChild(myH6T);
  myDivT.appendChild(myP1T);
  myDivT.appendChild(myP2T);
  myDivT.appendChild(myP3T);
  myDivT.appendChild(myP4T);
  myDivT.appendChild(myP5T);
  myDivT.appendChild(myP6T);
  myDivT.appendChild(myP8T);
  myDivT.appendChild(myP9T);
  myDivT.appendChild(myP10T);
  myH6T.style = "font-size:13px; font-weight:bold; padding: 15px 5px 5px";
  myP1T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP2T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP3T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP4T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP5T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP6T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP8T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP9T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px; ";
  myP10T.style = "width: 150px; border: 1px solid #0000001a; margin:0 5px 7px;";
  myAllDiv.appendChild(myDivT);
  
  let myDivTh = document.createElement("div");
  // create id for div
  myDivT.setAttribute("id","divOne");
  // create h4
  let myP1Th = document.createElement("img");
  let myP2Th = document.createElement("img");
  myP1Th.src = "en_drop-01.png";
  myP2Th.src = "en_drop-02.png";
  myDivTh.appendChild(myP1Th);
  myDivTh.appendChild(myP2Th);
  myP1Th.style = "width: 450px; margin:20px 5px 20px 0px; ";
  myP2Th.style = "width: 250px; margin:20px 5px 20px 5px; ";
  myDivTh.style = "display: flex";
  myAllDiv.appendChild(myDivTh);
  myAllDiv.style = "display: flex ; width:100%; height: 400px; background:#fff; z-index: 999; position:fixed; top:105px; border-top: 1px solid #000";
  document.body.appendChild(myAllDiv);
}; 
function removeOne(){
  var myDiv = document.getElementById("divOne");

  // Check if an h1 element exists
  if (myDiv) {
    // Remove the h1 element from the body
    document.body.removeChild(myDiv);
  }
  // Check if an h1 element exists
  if (myAllDiv) {
    // Remove the h1 element from the body
    document.body.removeChild(myDiv);
  }
  };
  document.getElementById('seeMoreBtn').addEventListener('click', function () {
    var products = document.getElementById('products').getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
        products[i].classList.toggle('show');
    }

    // Change button text based on the current state
    var buttonText = this.textContent === 'See More' ? 'Hide' : 'See More';
    this.textContent = buttonText;
});
  document.getElementById('seeMoreBtnn').addEventListener('click', function () {
    var productss = document.getElementById('productss').getElementsByClassName('productt');

    for (var i = 0; i < productss.length; i++) {
        productss[i].classList.toggle('show');
    }

    // Change button text based on the current state
    var buttonText = this.textContent === 'See More' ? 'Hide' : 'See More';
    this.textContent = buttonText;
});


document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('loaded-overlay').style.display = 'none';
    document.body.style.overflow = "visible";
  }, 5000);
});

