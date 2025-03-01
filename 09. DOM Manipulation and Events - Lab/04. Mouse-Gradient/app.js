function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', calculateDistance);

    function calculateDistance(e) {
        let distance = Math.floor((e.offsetX / gradientElement.clientWidth) * 100);
        resultElement.textContent = `${distance}%`;
    }
}