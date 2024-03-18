function convertTemperature() { 
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var output = document.getElementById('output');

    if (inputUnit === "celsius") {
        var fahrenheit = (inputTemp * 9/5) + 32;
        var kelvin = inputTemp + 273.15;
        output.innerHTML = `${inputTemp} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit and ${kelvin.toFixed(2)} Kelvin`;
    } else if (inputUnit === "fahrenheit") {
        var celsius = (inputTemp - 32) * 5/9;
        var kelvin = (inputTemp - 32) * 5/9 + 273.15;
        output.innerHTML = `${inputTemp} Fahrenheit = ${celsius.toFixed(2)} Celsius and ${kelvin.toFixed(2)} Kelvin`;
    } else if (inputUnit === "kelvin") {
        var celsius = inputTemp - 273.15;
        var fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
        output.innerHTML = `${inputTemp} Kelvin = ${celsius.toFixed(2)} Celsius and ${fahrenheit.toFixed(2)} Fahrenheit`;
    }
}
