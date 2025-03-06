function solve() {
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');

    let sectionElements = document.querySelectorAll('section');
    let openSection = sectionElements[1];
    let inProgressSection = sectionElements[2];
    let completeSection = sectionElements[3];

    let addButton = document.getElementById('add');

    addButton.addEventListener('click', addNewTask);

    function addNewTask(e) {
        e.preventDefault();

        if (!taskInput.value ||
            !descriptionInput.value ||
            !dateInput.value) {
                return;
        }

        let divElement = openSection.querySelectorAll('div')[1];

        let newArticle = createNewArticle(taskInput.value, descriptionInput.value, dateInput.value);

        divElement.appendChild(newArticle);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
    }

    function moveInProgress(e) {
        let articleToMove = e.target.parentElement.parentElement;
        articleToMove.remove();

        let divElement = inProgressSection.querySelectorAll('div')[1];

        let modifiedArticle = modifyArticle(articleToMove);

        divElement.appendChild(modifiedArticle);
    }

    function deleteTask(e) {
        let articleToDelete = e.target.parentElement.parentElement;
        articleToDelete.remove();
    }

    function taskIsFinished(e) {
        let articleToFinish = e.target.parentElement.parentElement;
        articleToFinish.remove();

        let divElement = completeSection.querySelectorAll('div')[1];

        let finishedArticle = finishArticle(articleToFinish);

        divElement.appendChild(finishedArticle);
    }

    function createNewArticle(task, description, date) {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task;

        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${description}`;

        let pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);

        let divFlex = document.createElement('div');
        divFlex.classList.add('flex');

        let startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', moveInProgress);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        divFlex.appendChild(startButton);
        divFlex.appendChild(deleteButton);

        article.appendChild(divFlex);

        return article;
    }

    function modifyArticle(article) {
        let div = article.querySelector('div');
        div.remove();

        let startButton = div.querySelector('button');
        startButton.remove();

        let finishButton = document.createElement('button');
        finishButton.classList.add('orange');
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', taskIsFinished);

        div.appendChild(finishButton);

        article.appendChild(div);

        return article;
    }

    function finishArticle(article) {
        let div = article.querySelector('div');
        div.remove();

        return article;
    }
}