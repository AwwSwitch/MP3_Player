const decreaseBtn = document.getElementById("but1");
const resetBtn = document.getElementById("but2");
const increaseBtn = document.getElementById("but3");
const countLabel = document.getElementById("counter");
let count = 0;

increaseBtn.onclick = function () {
    count += 1;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count -= 1;
    countLabel.textContent = count;
}