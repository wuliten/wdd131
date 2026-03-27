document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 48; 
const windSpeed = 10;  

function calculateWindChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}

const windChillDisplay = document.getElementById("windChill");

if (temperature <= 50 && windSpeed > 3) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillDisplay.textContent = chill.toFixed(1) + " °F";
} else {
    windChillDisplay.textContent = "N/A";
}