"use strict";var toggleMenu=document.getElementById("toggle-menu"),sideBar=document.getElementById("sidebar");toggleMenu.addEventListener("click",function(e){"toggle-menu"!=e.target.id&&"toggle-menu"!=e.target.parentElement.id||(sideBar.classList.toggle("show"),toggleMenu.classList.toggle("show"))});