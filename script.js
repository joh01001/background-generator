var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

console.log(h3);
console.log(color1);
console.log(color2);

function updateGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    
    h3.textContent = `${body.style.background};`;
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);

color1.value = "#ff0000";
color2.value = "#ffff00";
updateBackground();

updateH3();

// var bodyStyle = window.getComputedStyle(body);
// h3.textContent = bodyStyle.background;

