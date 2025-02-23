function timeToWalk(numberOfSteps, legthOfFootprint, speed) {
    let distanceInKm = (numberOfSteps * legthOfFootprint) / 1000.0;
    let minutesBreak = parseInt(distanceInKm * 1000 / 500);

    let timeInSeconds = distanceInKm / (speed / 3600);
    let hours = parseInt(timeInSeconds / 3600);
    let minutes = parseInt(timeInSeconds / 60);
    let seconds = Math.round(timeInSeconds - parseInt(minutes * 60));
    minutes += minutesBreak;

    console.log(`${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds}`);
}