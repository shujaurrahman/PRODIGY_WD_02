let timer;
let time = 0;
let running = false;

// Function to display the time in HH:MM:SS format
function displayTime() {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    document.getElementById('display').innerText = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to start or stop the stopwatch
function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStop').innerText = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerText = 'Stop';
    }
    running = !running;
}

// Function to update the time every second
function updateTime() {
    time += 1000;
    displayTime();
}

// Function to reset the stopwatch
function lapReset() {
    clearInterval(timer);
    time = 0; // Reset the time to 0
    displayTime(); // Update the display with the reset time
    document.getElementById('startStop').innerText = 'Start';
    running = false;
}

// Event listeners for buttons
document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('lapReset').addEventListener('click', lapReset);
