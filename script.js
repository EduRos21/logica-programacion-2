let celcius = prompt("Ingrese la temperadura en grados Celcius: ");

let userTemp = parseFloat(celcius);
if (celcius === null) {
  alert("Debe proporcionar una temperatura");
  location.reload();
} else if (celcius.trim() === "") {
  alert("Debe proporcionar una temperatura");
  location.reload();
} else {
    let userTemp = Number(celcius);
    if(isNaN(userTemp)) {
        alert("Poporciona una temperatura válida")
        location.reload();
    }
    else {
        let tempKel = userTemp + 273.15;
        let tempFar = (userTemp * 1.8) + 32;
        let kelElement = document.getElementById("kel");
        let farElement = document.getElementById("far");
        kelElement.innerText = `Grados Kelvin: ${tempKel}°`;
        farElement.innerText = `Grados Fahrenheit: ${tempFar}°`
    }
}
