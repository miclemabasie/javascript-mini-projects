const pages = document.querySelectorAll(".page")
const setBtn = document.getElementById("button");
const page2 = document.getElementById("page2")
setBtn.disabled = true
const input = document.getElementById("time")

page2.style.display = 'none';

if (localStorage.getItem("counter")) {
    document.getElementById("page1").style.display = 'none'
    inputContent = localStorage.getItem("counter")
    runtimer(inputContent)
}

// handle input validation
input.addEventListener("keyup", function () {
    let inputContent = parseInt(input.value)
    setBtn.disabled = true
    if (typeof (inputContent) === "number" && inputContent > 0) {
        if (input.value.length > 0) {
            setBtn.disabled = false
            console.log(inputContent)
        } else {
            setBtn.disabled = false;
        }
    }
})

setBtn.onclick = function () {
    let inputContent = parseInt(input.value)
    document.getElementById("page1").style.display = 'none'
    page2.style.display = 'flex';

    runtimer(inputContent)

}
function formatTime(inputContent) {
    // calculate the hours in anygiven input
    let hours = Math.floor(inputContent / 3600);
    inputContent = inputContent % 3600;
    // get all munites left
    let min = Math.floor(inputContent / 60);
    inputContent = inputContent % 60;
    // get the seconds
    let seconds = inputContent;

    let content = `<h1>Time Left: ${hours}h : ${min}m : ${seconds}s</h1>`
    page2.innerHTML = content;

}

function runtimer(inputContent) {
    setInterval(() => {
        if (inputContent === 0) {
            localStorage.removeItem("counter")
            return false;
        }
        formatTime(inputContent)
        inputContent = inputContent - 1;
        localStorage.setItem("counter", inputContent)
    }, 1000);
}