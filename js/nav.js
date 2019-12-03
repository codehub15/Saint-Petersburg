// buttons
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

// open nav
const openNav = () => {
  document.getElementById("myNav").style.height = "100%";
};

openIcon.addEventListener("click", openNav);

// close nav
const closeNav = () => {
  document.getElementById("myNav").style.height = "0%";
};

closeIcon.addEventListener("click", closeNav);
