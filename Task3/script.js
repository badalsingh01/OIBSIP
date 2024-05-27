function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const result = document.getElementById('result');
    const historyList = document.getElementById('historyList');
    let convertedTemp = '';
    let historyEntry = '';

    if (isNaN(temperature)) {
        result.innerText = 'Please enter a valid number.';
        return;
    }

    if (unit === 'celsius' && temperature < -273.15) {
        result.innerText = 'Temperature below absolute zero is not possible.';
        return;
    }
    if (unit === 'kelvin' && temperature < 0) {
        result.innerText = 'Temperature below absolute zero is not possible.';
        return;
    }
    if (unit === 'fahrenheit' && temperature < -459.67) {
        result.innerText = 'Temperature below absolute zero is not possible.';
        return;
    }

    switch(unit) {
        case 'celsius':
            convertedTemp = `Fahrenheit: ${(temperature * 9/5) + 32} °F\nKelvin: ${temperature + 273.15} K`;
            historyEntry = `${temperature} °C = ${(temperature * 9/5) + 32} °F, ${temperature + 273.15} K`;
            break;
        case 'fahrenheit':
            convertedTemp = `Celsius: ${(temperature - 32) * 5/9} °C\nKelvin: ${(temperature - 32) * 5/9 + 273.15} K`;
            historyEntry = `${temperature} °F = ${(temperature - 32) * 5/9} °C, ${(temperature - 32) * 5/9 + 273.15} K`;
            break;
        case 'kelvin':
            convertedTemp = `Celsius: ${temperature - 273.15} °C\nFahrenheit: ${(temperature - 273.15) * 9/5 + 32} °F`;
            historyEntry = `${temperature} K = ${temperature - 273.15} °C, ${(temperature - 273.15) * 9/5 + 32} °F`;
            break;
        default:
            convertedTemp = 'Invalid unit selected.';
    }

    result.innerText = convertedTemp;
    const li = document.createElement('li');
    li.innerText = historyEntry;
    historyList.appendChild(li);
}

function resetFields() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'celsius';
    document.getElementById('result').innerText = '';
}