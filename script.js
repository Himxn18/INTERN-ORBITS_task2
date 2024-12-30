function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const results = document.getElementById('results');
  
    if (isNaN(temp)) {
      results.innerHTML = "<p>Please enter a valid temperature.</p>";
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    if (unit === 'Celsius') {
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
    } else if (unit === 'Fahrenheit') {
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
    } else if (unit === 'Kelvin') {
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = temp;
    }
  
    results.innerHTML = `
      <p><strong>Results:</strong></p>
      <p>Celsius: ${celsius.toFixed(2)} &#8451;</p>
      <p>Fahrenheit: ${fahrenheit.toFixed(2)} &#8457;</p>
      <p>Kelvin: ${kelvin.toFixed(2)} K</p>
    `;
  }
  
