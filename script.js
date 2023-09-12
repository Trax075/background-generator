const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.getElementById('rand');
const hexString = "0123456789abcdef";

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background};`;
}

const randomBackground = () => {
    console.log("Kreirao si random pozadinu.");
    const prva = makeColor();
    const druga = makeColor();
    body.style.background = `linear-gradient(to right, ${prva}, ${druga})`;
    color1.value = prva;
    color2.value = druga;
    css.textContent = `${body.style.background};`;
}

const makeColor = () => {
    const hexCode = Array.from({length: 6}, () => hexString[Math.floor(Math.random() * hexString.length)]).join("");
    return `#${hexCode}`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomBackground);
