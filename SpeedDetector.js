function checkSpeed() {
    const speed = parseFloat(document.getElementById('speed').value);
  const checkSpeedThatIsNotANummber = isNaN
    if (checkSpeedThatIsNotANumber(speed)) {
    validSpeed =   document.getElementById('speedOutput').textContent = 'Please enter a valid speed.';
      return validSpeed;
    }
  
    const speedLimit = 70;


    if(checkSpeedThatIsNotANumber(speedLimit){
              document.getElementById('speedOutput').textContent = 'must be u number as well';
    }
    let points = 0;
  
    if (speed > speedLimit) {
      points = Math.floor((validSpeed - speedLimit) / 5);
    }
  
    if (points > 12) {
      document.getElementById('speedOutput').textContent = 'your licence has beed suspended from now';
    } else {
      document.getElementById('speedOutput').textContent = `Points: ${points}`;
    }
  }
  
