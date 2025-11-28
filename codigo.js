let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
    
  if (currentScroll > lastScroll) {
    header.style.top = "-800x";
  }
  else { 
    hearder.style.top = "0";
}
lastScroll = currentScroll;
}
);