function updateCountdown() {
    const now = new Date();
    const osloTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Oslo"}));
    
    const targetTime = new Date(osloTime);
    targetTime.setHours(16, 40, 0, 0);
    
    if (targetTime <= osloTime) {
        targetTime.setDate(targetTime.getDate() + 1);
    }
    
    const difference = targetTime - osloTime;
    
    if (difference <= 0) {
        document.querySelector('.countdown-container').style.display = 'none';
        document.getElementById('message').classList.remove('hidden');
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
