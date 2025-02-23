function daysInMonth(month, year) {
    let daysInMonth = 0;

    if (month % 2 != 0 || month == 8) {
        daysInMonth = 31;
    } else if (month % 2 == 0 && month != 2) {
        daysInMonth = 30;
    } else if (month == 2 && year % 2 != 0) {
        daysInMonth = 28;
    } else if (month == 2 && year % 2 == 0) {
        daysInMonth = 29;
    }

    return daysInMonth;
}