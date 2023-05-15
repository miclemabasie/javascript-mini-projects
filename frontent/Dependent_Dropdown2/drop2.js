const CountryStateInfo = {
    USA: {
        Califonia: {
            LosAngeles: ["90001", "90002", "90003", "90004"],
            SanDiego: ["92093", "92102"],
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

// console.log(CountryStateInfo['USA']["Texas"]["Dallas"])

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
    for(let country in CountryStateInfo){
        countrySelection.options[countrySelection.options.length] = new Option(country, country)
    }

    // Change country 

    countrySelection.onchange = (e) => {
        // Re-enable the state selection to
        stateSelection.disabled = false;
        citySelection.disabled = true
        zipSelection.disabled = true
        // Clear all options from state selection
        stateSelection.length = 1; // remove all options bar first
        citySelection.length = 1; // remove all options bar first
        zipSelection.length = 1; // remove all options bar first
        if(e.target.selectedIndex < 1) {
            stateSelection.disabled = true;
            citySelection.disabled = true;
            zipSelection.disabled = true
        }

        // Load states by looping over countryStateInfo
        for (let state in CountryStateInfo[e.target.value]){
            let stateOption = new Option(state, state)
            stateSelection.appendChild(stateOption)
        }
    }

    // Change State
    stateSelection.onchange = (e) => {
        citySelection.disabled = false;
        zipSelection.disabled = true
        citySelection.length = 1; // remove all options bar first
        zipSelection.length = 1; // remove all options bar first

        // Go through all cities
        for(let city in CountryStateInfo[countrySelection.value][e.target.value]) {
            let cityOption = new Option(city, city)
            citySelection.appendChild(cityOption)
        }

        if(e.target.selectedIndex < 1) {
            citySelection.disabled = true;
            zipSelection.disabled = true
        }

    }

    // City Change State
    citySelection.onchange = (e) => {
        // Re-enable the zip selection input field
        zipSelection.disabled = false;

        // Get the list of zip codes to the respected city
        let zips = CountryStateInfo[countrySelection.value][stateSelection.value][e.target.value]
        
        // Go through all the zip codes in that particular city
        for(let zip in zips) {
            let zipOption = new Option(zips[zip], zips[zip])
            console.log(zipOption)
            zipSelection.appendChild(zipOption)
        }

        if(e.target.selectedIndex < 1) {
            zipSelection.disabled = true
        }
    }

    
}