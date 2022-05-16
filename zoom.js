/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Sourena Vafadar - 301171884
 *    Date: Feb 26 2022 
  

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderSourenaVafadarArray = window.opener.photoOrderSourenaVafadar;
var figFilenameSourenaVafadar = "images/IMG_0" + photoOrderSourenaVafadarArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilenameSourenaVafadar; // assign filename to img element
   createEventListener();

}
/* close window */
function closeWin() {
   window.close();
}

var o = 0;

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv =
      document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin,
         false);
   } else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin);
   }
   var addFavoritesBtnOne =
      document.getElementsByTagName("p")[1];
   console.log(addFavoritesBtnOne)
   if (addFavoritesBtnOne.addEventListener) {
      addFavoritesBtnOne.addEventListener("click", function () {
         if (window.opener.o < 5) {
            window.opener.addFabF();

         } else {
            alert("You must remove an image from favorites");

         }
      },
         false);
   } else if (addFavoritesBtnOne.attachEvent) {
      addFavoritesBtnOne.attachEvent("onclick", function () {
         if (window.opener.o < 5) {
            window.opener.addFabF();

         } else {
            alert("You must remove an image from favorites");

         }
      });
   }
}



/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;