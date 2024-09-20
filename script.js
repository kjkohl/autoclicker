
let intervalId;
let isClicking = false;

document.getElementById('startBtn').addEventListener('click', startClicking);
document.getElementById('stopBtn').addEventListener('click', stopClicking);

function startClicking() {
    const interval = parseInt(document.getElementById('interval').value, 10);

    if (isNaN(interval) || interval <= 0) {
        alert('Please enter a valid interval.');
        return;
    }

    isClicking = true;
    document.getElementById('status').textContent = 'Status: Clicking...';
    document.getElementById('startBtn').disabled = true;
    document.getElementById('stopBtn').disabled = false;

    intervalId = setInterval(() => {
        console.log('Clicking...'); // Here you'd want to add click simulation logic if running in an appropriate context
    }, interval);
}

function stopClicking() {
    clearInterval(intervalId);
    isClicking = false;
    document.getElementById('status').textContent = 'Status: Stopped';
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
}
