function speedDetector() {
    // Prompt the user for the speed input
    let speed = prompt("Enter the car speed:");

    // Convert the input to an integer
    speed = parseInt(speed);

    // is valid
    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed.");
        return;
    }

    //  the speed limit
    const speedLimit = 70;
    const demeritPointThreshold = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit)/ demeritPointThreshold);
        
        // If points exceed the maximum allowed, suspend the license
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
speedDetector();
