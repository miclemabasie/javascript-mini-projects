var xhr = new XMLHttpRequest()

xhr.open("GET", "cats.json")

xhr.onload = function() {
    let data = xhr.responseText;
    data = JSON.parse(data)
    console.log(data[0])
}

xhr.send()

// console.log(xhr)
