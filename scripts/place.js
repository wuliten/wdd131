document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 10;
const windSpeed = 16;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

const windChillDisplay = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillDisplay.textContent = chill.toFixed(1) + " °C";
} else {
    windChillDisplay.textContent = "N/A";
}