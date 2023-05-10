// Get all html elements
let makeSelection = document.getElementById("make"),
modelSelection = document.getElementById("models"),
selectForm = document.getElementById("select-form")

// set list values for different makes
const mecedeseMakes = ['kompressor 320', 'benz', 'mes']


// Disable the model selection field at first
modelSelection.disabled = true;

selectForm.onchange = function() {
    let newOptions = document.createElement("Option")
    if (makeSelection.value == 'mecedese'){
        console.log("Mecedese has been selected")
        // console.log(makeSelection.options[makeSelection.selectedIndex].value)
        // console.log(makeSelection.selectedIndex)
        modelSelection.disabled = false;
    }
    
}