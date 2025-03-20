window.addEventListener("load", solve);

function solve() {
  const colorInput = document.getElementById('colors');
  const motorcycleInput = document.getElementById('motorcycles');
  const dateInput = document.getElementById('datetime');
  const nameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');

  const previewList = document.getElementById('preview-list');
  const completeList = document.getElementById('complete-list');
  const dataViewDiv = document.getElementsByClassName('data-view')[0];
  const testButton = document.getElementById('test-ride-btn');

  testButton.addEventListener('click', addMotorForTest);

  function addMotorForTest(e) {
    if (colorInput.value === '' || motorcycleInput.value === '' || 
        dateInput.value === '' || nameInput.value === '' || emailInput.value === '') {
          return;
    }

    let liItem = createListItemElement();
    previewList.appendChild(liItem);

    testButton.disabled = true;
    colorInput.value = '';
    motorcycleInput.value = '';
    dateInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
  }

  function createListItemElement() {
    let li = document.createElement('li');

    let article = document.createElement('article');

    let pColor = document.createElement('p');
    pColor.innerHTML = `Color: ${colorInput.value}`;

    let pModel = document.createElement('p');
    pModel.innerHTML = `Model: ${motorcycleInput.value}`;

    let pName = document.createElement('p');
    pName.innerHTML = `For: ${nameInput.value}`;

    let pEmail = document.createElement('p');
    pEmail.innerHTML = `Contact: ${emailInput.value}`;

    let pDate = document.createElement('p');
    pDate.innerHTML = `Test Ride On: ${dateInput.value}`;

    let divContainer = document.createElement('div');
    divContainer.classList.add('btn-container');

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = 'Edit';
    editBtn.addEventListener('click', onEditClicked);
    
    let nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.innerHTML = 'Next';
    nextBtn.addEventListener('click', onNextClicked);

    divContainer.appendChild(editBtn);
    divContainer.appendChild(nextBtn);

    article.appendChild(pColor);
    article.appendChild(pModel);
    article.appendChild(pName);
    article.appendChild(pEmail);
    article.appendChild(pDate);

    li.appendChild(article);
    li.appendChild(divContainer);

    return li;
  }

  function onEditClicked(e) {
    let li = e.target.parentElement.parentElement;
    let inputsInfo = Array.from(li.querySelector('article').children);

    let color = inputsInfo[0].innerHTML.split(' ').slice(1).join(' ');
    let model = inputsInfo[1].innerHTML.split(' ').slice(1).join(' ');
    let name = inputsInfo[2].innerHTML.split(' ').slice(1).join(' ');
    let email = inputsInfo[3].innerHTML.split(' ').slice(1).join(' ');
    let date = inputsInfo[4].innerHTML.split(' ').slice(3).join(' ');

    colorInput.value = color;
    motorcycleInput.value = model;
    nameInput.value = name;
    emailInput.value = email;
    dateInput.value = date;

    testButton.disabled = false;

    li.remove();
  }

  function onNextClicked(e) {
    let li = e.target.parentElement.parentElement;
    li.remove();

    let newLi = document.createElement('li');
    let article = li.querySelector('article');

    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = 'Complete'
    completeBtn.addEventListener('click', onCompleteClicked);

    article.appendChild(completeBtn);
    newLi.appendChild(article);

    completeList.appendChild(newLi);
  }

  function onCompleteClicked(e) {
    let li = e.target.parentElement.parentElement;
    li.remove();

    let testCompletedBtn = document.createElement('button');
    testCompletedBtn.classList.add('confirm-btn');
    testCompletedBtn.innerHTML = 'Your Test Ride is Confirmed';
    testCompletedBtn.addEventListener('click', () => location.reload());

    dataViewDiv.appendChild(testCompletedBtn);
  }
}