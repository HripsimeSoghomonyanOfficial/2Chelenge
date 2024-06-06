function subtractMinutesFromTime(currentTime, minutesToSubtract) {
    let [hours, minutes] = currentTime.split(':').map(Number);
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setMinutes(date.getMinutes() - minutesToSubtract);
    let newHours = date.getHours();
    let newMinutes = date.getMinutes();

    newHours = newHours < 10 ? '0' + newHours : newHours;
    newMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes;

    return `${newHours}:${newMinutes}`;
}

let currentTime = "11:20";
let minutesToSubtract = 45;``
let newTime = subtractMinutesFromTime(currentTime, minutesToSubtract);
console.log(newTime);
