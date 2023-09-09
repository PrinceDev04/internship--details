function updateDateTime() {
    const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const utcTime = new Date().toUTCString()

    document.getElementById('dayOfWeek').textContent = dayOfWeek;
    document.getElementById('utcTime').textContent = utcTime;
}

setInterval(updateDateTime, 1000)

updateDateTime()
