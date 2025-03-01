function attachEventsListeners() {
    const conversionRates = {
        Kilometers: 1000,
        Meters: 1,
        Centimeters: 0.01,
        Millimeters: 0.001,
        Miles: 1609.34,
        Yards: 0.9144,
        Feet: 0.3048,
        Inches: 0.0254
    };

    let inputElement = document.getElementById('inputDistance');
    let outputElement = document.getElementById('outputDistance');

    let inputUnits = Array.from(document.getElementById('inputUnits').children);
    let outputUnits = Array.from(document.getElementById('outputUnits').children);

    document.getElementById('convert').addEventListener('click', convert);

    function convert() {
        let selectedInputUnit = '';
        let selectedOutputUnit = '';

        inputUnits.forEach(unit => {
            if (unit.selected) {
                selectedInputUnit = unit.textContent;
            }
        });

        outputUnits.forEach(unit => {
            if (unit.selected) {
                selectedOutputUnit = unit.textContent;
            }
        });

        let meters = Number(inputElement.value) * conversionRates[selectedInputUnit];

        let convertedValue = meters / conversionRates[selectedOutputUnit];

        outputElement.value = convertedValue;
    }
}