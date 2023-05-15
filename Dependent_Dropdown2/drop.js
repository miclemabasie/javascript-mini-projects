const CountryStateInfo = {
    USA: {
        Califonia: {
            "Los Angeles": ["90001", "90002", "90003", "90004"],
            "San Diego": ["92093", "92102"],
        },
        Texas: {
            Dallas: ["75201", "75202"],
            Austin: ["73301", "73344"],
        },

    },
    Germany: {
        Baveria: {
            Munich: ["80331", "80333", "80335", "80336"],
            Nuremberg: ["90402", "90403", "90404", "90405"],
        },
        Hessen: {
            Frankfurt: ["60306", "60308", "60309", "60310"],
            Surat: ["55246", "55247", "55248", "55249"]
        }
    }
}

// Loader function
window.onload = function() {
    // Get all the dom select elements
    const countrySelection = document.querySelector("#country"),
    stateSelection = document.querySelector("#state"),
    citySelection = document.querySelector("#city"),
    zipSelection = document.querySelector("#zip");

    stateSelection.disabled = true
    citySelection.disabled = true
    zipSelection.disabled = true

    // Load the coountry data
    // for(let country in CountryStateInfo){
    //     countrySelection.options[countrySelection.options.length] = new Option(country, country)
    //      console.log(countrySelection.options)
    //      console.log(countrySelection.options.length)
    // }

    for(let country in CountryStateInfo){
        const option = new Option(country, country)
        countrySelection.appendChild(option)
    }
    countrySelection.addEventListener("change", function() {
      
            stateSelection.disabled = false
            stateSelection.innerHTML = ''
            for(let state in CountryStateInfo[countrySelection.value]){
                option = new Option(state, state)
                stateSelection.appendChild(option)
                console.log(state)
            }
       
    })
}