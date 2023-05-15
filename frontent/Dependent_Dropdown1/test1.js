const makeSelection = document.getElementById("slct1")

function populate(s1, s2){
    console.log('this')
    var s1 = document.getElementById(s1)
    var s2 = document.getElementById(s2)
    s2.innerHTML = "";

    if(s1.value == "Chevy"){
        var optionsArray = ["|", "camaro|Camaro", "corvette|Corvette", "impala|Impala"]
    }

    console.log(optionsArray)
}
