
var xhr =  new XMLHttpRequest()

xhr.open("GET", "../countries+states+cities.json")

xhr.onload = function () {
    data = JSON.parse(xhr.responseText);
    data = data.slice(0, 20)
    data.forEach(c => {
        // create a title for the c name
        let h1 = document.createElement("h1")
        h1.innerHTML = c.name
        // c information placeholder
        let countryInfo = `ID: ${c.id},<br/> ISO: ${c.iso2}, <br/> lat: ${c.latitude},<br/> long: ${c.longitude},<br/> Region: ${c.region},<br/> Number of States: ${c.states.length}<hr/>`
        let div = document.createElement("div")
        div.innerHTML = countryInfo
        let final_div = document.createElement("div")
        final_div.appendChild(h1)
        final_div.appendChild(div)
        document.body.appendChild(final_div)
    });

}

xhr.send()