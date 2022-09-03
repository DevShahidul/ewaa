"use strict"
const sidebar = document.querySelector(".sidebar")
const navLink = document.querySelectorAll('.sidebar .nav .btn-toggle');

const smallSidebarScreen = 1200;

window.addEventListener("resize", function () {
   sidebarExpandOnSmallerScreen();
})

window.addEventListener("load", function () {
   sidebarExpandOnSmallerScreen();
})

function sidebarExpandOnSmallerScreen() {
   const wndWidth = window.innerWidth;
   if (wndWidth < smallSidebarScreen && wndWidth > 767) {
      if (navLink.length !== 0) {
         navLink.forEach(function (btnToggle) {
            btnToggle.addEventListener("click", function () {
               const expanded = btnToggle.getAttribute("aria-expanded");
               if (expanded === "true") {
                  sidebar.classList.add('show');
               } else {
                  sidebar.classList.remove('show');
               }
               // if () {
               // }
            })
         })
      }
   }
}
