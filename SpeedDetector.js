function checkSpeed() {
    const speed = parseFloat(document.getElementById('speed').value);
  
    if (isNaN(speed)) {
      document.getElementById('speedOutput').textContent = 'Please enter a valid speed.';
      return;
    }
  
    const speedLimit = 70;
    let points = 0;
  
    if (speed > speedLimit) {
      points = Math.floor((speed - speedLimit) / 5);
    }
  
    if (points > 12) {
      document.getElementById('speedOutput').textContent = 'License suspended';
    } else {
      document.getElementById('speedOutput').textContent = `Points: ${points}`;
    }
  }
  