function openNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  function closeNavBar() {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
  }