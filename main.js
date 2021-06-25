/*function myFunction() {
    const x = document.getElementById("hidelist");
    const y = document.getElementById("menuicon");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML="<i class='fas fa-times'></i>"
    } else {
      x.style.display = "none";
      y.innerHTML="<i class='fas fa-bars'></i>"
    }
  }
*/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}