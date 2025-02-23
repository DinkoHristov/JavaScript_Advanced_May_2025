function previousDay(year, month, day) {
    let currentDay = new Date(year, month - 1, day);
    let previousDay = new Date(currentDay.setDate(currentDay.getDate() -1));

    console.log(`${previousDay.getFullYear()}-${previousDay.getMonth() + 1}-${previousDay.getDate()}`);
}