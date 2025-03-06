function solve() {
    let divContainer = document.getElementById('container');
    let moviesSection = document.getElementById('movies');
    let archiveSection = document.getElementById('archive');

    let divInputs = divContainer.querySelectorAll('input');
    let moviesUl = moviesSection.querySelector('ul');
    let archivesUl = archiveSection.querySelector('ul');

    let screenButton = divContainer.querySelector('button');
    let clearButton = archiveSection.querySelector('button');

    screenButton.addEventListener('click', addNewMovie);
    clearButton.addEventListener('click', clearAllArchivedMovies);

    function addNewMovie(e) {
        e.preventDefault();

        let nameInput = divInputs[0];
        let hallInput = divInputs[1];
        let priceInput = divInputs[2];

        if (!nameInput.value ||
            !hallInput.value ||
            !priceInput.value ||
            isNaN(Number(priceInput.value))) {
                return;
        }

        let newMovieElement = createMovie(nameInput.value, hallInput.value, Number(priceInput.value));
        moviesUl.appendChild(newMovieElement);

        nameInput.value = '';
        hallInput.value = '';
        priceInput.value = '';
    }

    function createMovie(name, hall, price) {
        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = name;

        let strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;

        li.appendChild(span);
        li.appendChild(strongHall);

        let div = document.createElement('div');

        let strongPrice = document.createElement('strong');
        strongPrice.textContent = price.toFixed(2);

        let input = document.createElement('input');
        input.placeholder = 'Tickets Sold';

        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        archiveButton.addEventListener('click', archiveMovie);

        div.appendChild(strongPrice);
        div.appendChild(input);
        div.appendChild(archiveButton);

        li.appendChild(div);

        return li;
    }

    function archiveMovie(e) {
        let divElement = e.target.parentElement;
        let inputElement = divElement.querySelector('input');

        if (!inputElement.value ||
            isNaN(Number(inputElement.value))) {
                return;
        }

        let liElementToRemove = divElement.parentElement;
        liElementToRemove.remove();

        let archiveElement = addMovieToTheArchive(liElementToRemove, divElement, Number(inputElement.value));
        archivesUl.appendChild(archiveElement);
    }

    function addMovieToTheArchive(liElement, divElement, ticketsSold) {
        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = liElement.querySelector('span').textContent;

        let price = Number(divElement.querySelector('strong').textContent);
        let strongPrice = document.createElement('strong');
        strongPrice.textContent = `Total amount: ${(price * ticketsSold).toFixed(2)}`;

        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', deleteMovie);

        li.appendChild(span);
        li.appendChild(strongPrice);
        li.appendChild(buttonDelete);

        return li;
    }

    function deleteMovie(e) {
        let li = e.target.parentElement;
        li.remove();
    }

    function clearAllArchivedMovies(e) {
        let ulElement = archiveSection.querySelector('ul');

        let allLiElements = ulElement.querySelectorAll('li');

        if (allLiElements !== undefined) {
            allLiElements.forEach(element => {
                element.remove();
            });
        }
    }
}