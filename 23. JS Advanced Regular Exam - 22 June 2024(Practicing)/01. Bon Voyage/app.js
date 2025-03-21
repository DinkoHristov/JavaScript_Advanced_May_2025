window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const fromDateInput = document.getElementById('from-date');
    const toDateInput = document.getElementById('to-date');

    const infoList = document.getElementsByClassName('info-list')[0];
    const continueList = document.getElementsByClassName('confirm-list')[0];
    const h1Status = document.getElementById('status');

    h1Status.addEventListener('click', () => location.reload()); // Reload the page

    const nextButton = document.getElementById('next-btn');

    nextButton.addEventListener('click', onNextButtonClicked);

    function onNextButtonClicked(e) {
        e.preventDefault();

        if (firstNameInput.value.trim() === '' ||
            lastNameInput.value.trim() === '' ||
            fromDateInput.value === '' ||
            toDateInput.value === '') {
                return;
        }

        let fromDate = new Date(fromDateInput.value).getTime();
        let toDate = new Date(toDateInput.value).getTime();

        if (fromDate >= toDate) {
            return;
        }

        let liItem = createLiElement();
        infoList.appendChild(liItem);

        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        toDateInput.value = '';
        nextButton.disabled = true;
    }

    function onEditButtonClicked(e) {
        let li = e.target.parentElement;
        li.remove();

        let articleElements = Array.from(li.querySelector('article').children);

        let nameInfo = articleElements[0].innerHTML.split(' ').slice(1);
        let fromDateInfo = articleElements[1].innerHTML.split(' ')[2];
        let toDateInfo = articleElements[2].innerHTML.split(' ')[2];

        firstNameInput.value = nameInfo[0];
        lastNameInput.value = nameInfo[1];
        fromDateInput.value = fromDateInfo;
        toDateInput.value = toDateInfo;

        nextButton.disabled = false;
    }

    function onContinueButtonClicked(e) {
        let li = e.target.parentElement;
        li.remove();

        let newLi = document.createElement('li');
        newLi.classList.add('vacation-content');

        let article = li.querySelector('article');

        let confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.innerHTML = 'Confirm';
        confirmBtn.addEventListener('click', onConfirmButtonClicked);
        
        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.innerHTML = 'Cancel';
        cancelBtn.addEventListener('click', onCancelButtonClicked);

        newLi.appendChild(article);
        newLi.appendChild(confirmBtn);
        newLi.appendChild(cancelBtn);

        continueList.appendChild(newLi);
    }

    function onConfirmButtonClicked(e) {
        let li = e.target.parentElement;
        li.remove();
        
        h1Status.classList.add('vacation-confirmed');
        h1Status.innerHTML = 'Vacation Requested';

        nextButton.disabled = false;
    }

    function onCancelButtonClicked(e) {
        let li = e.target.parentElement;
        li.remove();

        h1Status.classList.add('vacation-cancelled');
        h1Status.innerHTML = 'Cancelled Vacation';

        nextButton.disabled = false;
    }

    function createLiElement() {
        let li = document.createElement('li');
        li.classList.add('vacation-content');

        let article = document.createElement('article');

        let h3Name = document.createElement('h3');
        h3Name.innerHTML = `Name: ${firstNameInput.value} ${lastNameInput.value}`;

        let pFromDate = document.createElement('p');
        pFromDate.innerHTML = `From date: ${fromDateInput.value}`;
        
        let pToDate = document.createElement('p');
        pToDate.innerHTML = `To date: ${toDateInput.value}`;

        article.appendChild(h3Name);
        article.appendChild(pFromDate);
        article.appendChild(pToDate);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = 'Edit';
        editBtn.addEventListener('click', onEditButtonClicked);
        
        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.innerHTML = 'Continue';
        continueBtn.addEventListener('click', onContinueButtonClicked);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        return li;
    }
}