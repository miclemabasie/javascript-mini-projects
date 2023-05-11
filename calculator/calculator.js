// Get the input elements
const input1 = document.getElementById("num1"),
input2 = document.getElementById("num2"),
results = document.getElementById("results")


// Get the all the buttons as a node list
const buttons = document.querySelectorAll(".button")

// loop over the list of button and attatch an event to each button
buttons.forEach(button => {
    button.disabled = true;
    button.addEventListener("click", function() {
        calculate(button.id)
    })
});

// Write function to perform operation based on button clicked
function calculate(operation){
    const num1 = parseInt(input1.value),
    num2 = parseInt(input2.value);
    let res = 0;
    if (operation == 'add'){
        res = num1 + num2;
    }else if(operation == 'sub'){
        res = num1 - num2;
    }else if (operation == 'mul') {
        res = num1 * num2;
    }else if (operation == 'div'){
        res = num1 / num2;
    }
    if (res){
        results.innerHTML = res;
    }else if(res == 0) {
        results.innerHTML = res;
    }
}


function activateBtns(element, other){
    element.addEventListener("keydown", function() {
        if(parseInt(element.value) && parseInt(other.value)){
            buttons.forEach(button => {
                button.disabled = false;
            });
        }else{
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    })
}

activateBtns(input1, input2)
activateBtns(input2, input1)
