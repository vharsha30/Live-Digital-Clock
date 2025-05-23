function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  