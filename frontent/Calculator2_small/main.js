const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")
var add = document.getElementById("add")
var sub = document.getElementById("sub")

add.addEventListener("click", function (e) {
    e.preventDefault()
    const num11 = parseInt(num1.value)
    const num22 = parseInt(num2.value)
    const res = num11 + num22
    result.innerHTML = res
})

sub.addEventListener("click", function (e) {
    e.preventDefault()
    const num11 = parseInt(num1.value)
    const num22 = parseInt(num2.value)
    const res = num11 - num22
    result.innerHTML = res
})
