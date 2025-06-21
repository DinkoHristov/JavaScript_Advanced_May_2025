window.addEventListener('load', solve);

function solve() {
    const orderList = document.querySelector('.order-info-list'); // ul -> order-info-list
    const confirmList = document.querySelector('.confirm-order-list'); // ul -> confirm-order-list
    const status = document.getElementById('status'); // h3
    status.addEventListener('click', () => location.reload());

    let pickLocation = document.getElementById('pick-up-location');
    let dropLocation = document.getElementById('drop-off-location');
    let passengersNumber = document.getElementById('number-of-passengers');
    let dateTime = document.getElementById('date-time');
    let taxiType = document.getElementById('taxi-type');

    let orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', onOrderBtnClicked);

    function onOrderBtnClicked(e) {
        e.preventDefault();

        if (!pickLocation.value || !dropLocation.value ||
            !passengersNumber.value || !dateTime.value ||
            !taxiType.value) {
                return;
        }

        let liElement = createLiItem();
        orderList.appendChild(liElement);
    }

    function createLiItem() {
        let li = document.createElement('li');
        li.classList.add('order-content');

        let article = document.createElement('article');

        let h3PickFrom = document.createElement('h3');
        h3PickFrom.innerHTML = `Pick From: ${pickLocation.value}`;

        let h3DropTo = document.createElement('h3');
        h3DropTo.innerHTML = `Drop-Off: ${dropLocation.value}`;
        
        let pPassengers = document.createElement('p');
        pPassengers.innerHTML = `Passengers: ${Number(passengersNumber.value)}`;

        let pTime = document.createElement('p');
        pTime.innerHTML = `Time: ${dateTime.value}`;

        let pType = document.createElement('p');
        pType.innerHTML = `Type: ${taxiType.value}`;

        let div = document.createElement('div');
        div.classList.add('btn-wrapper');

        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', onEditBtnClicked);
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.addEventListener('click', onContinueBtnClicked);
        continueBtn.classList.add('continue-btn');
        continueBtn.innerHTML = 'Continue';

        article.appendChild(h3PickFrom);
        article.appendChild(h3DropTo);
        article.appendChild(pPassengers);
        article.appendChild(pTime);
        article.appendChild(pType);

        div.appendChild(editBtn);
        div.appendChild(continueBtn);

        li.appendChild(article);
        li.appendChild(div);

        // Clear Input Fields and disable Order-Btn
        pickLocation.value = '';
        dropLocation.value = '';
        passengersNumber.value = '';
        dateTime.value = '';
        taxiType.value = '';
        orderBtn.disabled = true;

        return li;
    }

    function onEditBtnClicked(e) {
        e.preventDefault();

        let li = e.target.parentElement.parentElement;
        li.remove();

        let article = li.querySelector('article');
        let hTags = Array.from(article.querySelectorAll('h3'));
        let pTags = Array.from(article.querySelectorAll('p'));

        let pick = hTags[0].innerHTML.split(' ').slice(2).join(' ');
        let drop = hTags[1].innerHTML.split(' ').slice(1).join(' ');
        let passengers = Number(pTags[0].innerHTML.split(' ')[1]);
        let time = pTags[1].innerHTML.split(' ')[1];
        let type = pTags[2].innerHTML.split(' ')[1];

        pickLocation.value = pick;
        dropLocation.value = drop;
        passengersNumber.value = passengers;
        dateTime.value = time;
        taxiType.value = type;

        orderBtn.disabled = false;
    }

    function onContinueBtnClicked(e) {
        e.preventDefault();

        let li = e.target.parentElement.parentElement;
        li.remove();

        let div = li.querySelector('div');
        div.remove();

        let newDiv = document.createElement('div');
        newDiv.classList.add('btn-wrapper');

        let cancelBtn = document.createElement('button');
        cancelBtn.addEventListener('click', onCancelBtnClicked);
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.innerHTML = 'Cancel';

        let confirmBtn = document.createElement('button');
        confirmBtn.addEventListener('click', onConfirmBtnClicked);
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.innerHTML = 'Confirm';

        newDiv.appendChild(cancelBtn);
        newDiv.appendChild(confirmBtn);

        li.appendChild(newDiv);

        confirmList.appendChild(li);
    }

    function onCancelBtnClicked(e) {
        e.preventDefault();

        let li = e.target.parentElement.parentElement;
        li.remove();
        
        status.classList.add('taxi-not-complete');
        status.innerHTML = 'Taxi request was not completed.';

        orderBtn.disabled = false;
    }

    function onConfirmBtnClicked(e) {
        e.preventDefault();

        let li = e.target.parentElement.parentElement;
        li.remove();

        status.classList.add('taxi-ordered');
        status.innerHTML = 'Taxi has been successfully ordered.';

        orderBtn.disabled = false;
    }
}