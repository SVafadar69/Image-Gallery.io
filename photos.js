/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Sourena Vafadar - 301171884
 *    Date: Feb 26 2022 

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderSourenaVafadar = [1, 2, 3, 4, 5];
var figureCountSourenaVafadar = 3;

function populateFigures() {
   var filenameSourenaVafadar;
   var currentFigSourenaVafadar;

   if (figureCountSourenaVafadar === 3) {

      for (var i = 1; i < 4; i++) {
         filenameSourenaVafadar = "images/IMG_0" + photoOrderSourenaVafadar[i] + "sm.jpg";
         currentFigSourenaVafadar = document.getElementsByTagName("img")[i - 1];
         currentFigSourenaVafadar.src = filenameSourenaVafadar;
      }

   } else {
      for (var i = 0; i < 5; i++) {
         filenameSourenaVafadar = "images/IMG_0" + photoOrderSourenaVafadar[i] + "sm.jpg";
         currentFigSourenaVafadar = document.getElementsByTagName("img")[i];
         currentFigSourenaVafadar.src = filenameSourenaVafadar;
      }
   }
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrderSourenaVafadar[i] + 1) === 6) {
         photoOrderSourenaVafadar[i] = 1;
      } else {
         photoOrderSourenaVafadar[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrderSourenaVafadar[i] - 1) === 0) {
         photoOrderSourenaVafadar[i] = 5;
      } else {
         photoOrderSourenaVafadar[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive() {
   var articleElSourenaVafadar = document.getElementsByTagName("article")[0];
   var lastFigureSourenaVafadar = document.createElement("figure");
   lastFigureSourenaVafadar.id = "fig5";
   lastFigureSourenaVafadar.style.zIndex = "5";
   lastFigureSourenaVafadar.style.position = "absolute";
   lastFigureSourenaVafadar.style.right = "45px";
   lastFigureSourenaVafadar.style.top = "67px";

   var lastImageSourenaVafadar = document.createElement("img");
   lastImageSourenaVafadar.width = "240";
   lastImageSourenaVafadar.height = "135";

   lastFigureSourenaVafadar.appendChild(lastImageSourenaVafadar);
   //articleEl.appendChild(lastFigure);
   articleElSourenaVafadar.insertBefore(lastFigureSourenaVafadar,
      document.getElementById("rightarrow"));
   //clone figure element for fifth image and edit to be first image

   var firstFigure = lastFigureSourenaVafadar.cloneNode(true);

   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";

   //articleEl.appendChild(firstFigure); 

   articleElSourenaVafadar.insertBefore(firstFigure,
      document.getElementById("fig2"));



   figureCountSourenaVafadar = 5;
   //add appropriate src values to two new img elements
   document.getElementsByTagName("img")[0].src = "images/IMG_0"
      + photoOrderSourenaVafadar[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0"
      + photoOrderSourenaVafadar[4] + "sm.jpg";

   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive,
         false);
      numberButton.addEventListener("click", previewThree,
         false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }
}

function previewThree() {
   var articleElSourenaVafadar =
      document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");

   articleElSourenaVafadar.removeChild(document.getElementById("fig1"));
   articleElSourenaVafadar.removeChild(document.getElementById("fig5"));
   figureCountSourenaVafadar = 3;
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree,
         false);
      numberButton.addEventListener("click", previewFive, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}


/* open center figure in separate window */
function zoomFig() {
   var zoomWindowSourenaVafadar = window.open("zoom.htm", "zoomwin",
      "width=960,height=600");
   zoomWindowSourenaVafadar.focus();


}
// }

/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
      leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onclick", leftArrow);
   }
   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
      rightarrow.addEventListener("click", rightArrow, false);
   } else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onclick", rightArrow);
   }
   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
      mainFig.addEventListener("click", zoomFig, false);
   } else if (mainFig.attachEvent) {
      mainFig.attachEvent("onclick", zoomFig);
   }

   var showAllButtonSourenaVafadar = document.querySelector("#fiveButton p");
   if (showAllButtonSourenaVafadar.addEventListener) {
      showAllButtonSourenaVafadar.addEventListener("click", previewFive,
         false);
   } else if (showAllButtonSourenaVafadar.attachEvent) {
      showAllButtonSourenaVafadar.attachEvent("onclick", previewFive);
   }



}

var o = 0;


function addFabF() {

  
      var fabImage = document.createElement("img");
      var divfab = document.getElementById("fab");
      var favdiv = document.createElement("div");
      favdiv.classList.add("inlinediv");

      var mainImage = document.getElementById("fig3").querySelector("img");
      // console.log(mainImage);
      fabImage.src = mainImage.src;
      fabImage.width = "180";
      fabImage.height = "150";
      favdiv.appendChild(fabImage);
      divfab.appendChild(favdiv);

      var divspan = document.createElement("a");
      divspan.id = "a" + o;
      divspan.textContent = "Remove Image";
      favdiv.appendChild(divspan);

      // Callbacks are passed a reference to the event object that triggered the handler
      divspan.addEventListener("click", function (evt) {
         removeFab(divspan.parentNode); //pass object 
      });

      o++;

}

function removeFab(fabObject) {
   // console.log(fabObject.querySelector("img"));
   fabObject.remove();
   o--;
   console.log(o);

}


/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}



