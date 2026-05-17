// const = a variable that can't be changed

let radius;
const PI = 22 / 7;
let diameter;

// very basic boolean implementation, is there a need though
document.getElementById("butbox").onclick = function(){
    radius = document.getElementById("inbox").value;
    radius = Number(radius);
    diameter = 2 * PI * radius;
    document.getElementById("text_one").textContent = diameter;
}