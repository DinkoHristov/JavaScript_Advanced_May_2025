function attachEventsListeners() {
    let mainElement = document.querySelector('main');

    mainElement.addEventListener('click', newFunction);

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    function newFunction(e) {
        if (e.target.id === 'daysBtn' || e.target.id === 'hoursBtn' ||
            e.target.id === 'minutesBtn' || e.target.id === 'secondsBtn') {
            setGivenTime(daysInputElement, hoursInputElement, minutesInputElement, secondsInputElement);
        } 
    }

    function setGivenTime(daysElement, hoursElement, minutesElement, secondsElement) {
        if (daysElement.value !== '') {
            hoursInputElement.value = Number(daysElement.value) * 24;
            minutesInputElement.value = Number(hoursElement.value) * 60;
            secondsInputElement.value = Number(minutesElement.value) * 60;
        } else if (hoursElement.value !== '') {
            daysInputElement.value = Number(hoursElement.value) / 24;
            minutesInputElement.value = Number(hoursElement.value) * 60;
            secondsInputElement.value = Number(minutesElement.value) * 60;
        } else if (minutesElement.value !== '') {
            hoursInputElement.value = Number(minutesElement.value) / 60;
            daysInputElement.value = Number(hoursElement.value) / 24;
            secondsInputElement.value = Number(minutesElement.value) * 60;
        } else if (secondsElement.value !== '') {
            minutesInputElement.value = Number(secondsElement.value) / 60;
            hoursInputElement.value = Number(minutesElement.value) / 60;
            daysInputElement.value = Number(hoursElement.value) / 24;
        }
    }
}