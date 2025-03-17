window.addEventListener("load", solve);

function solve() {
  const activityElement = document.getElementById('type');
  const intensityElement = document.getElementById('intensity');
  const caloriesElement = document.getElementById('calories');
  const durationElement = document.getElementById('duration');
  const dateElement = document.getElementById('date');

  const previewUlElement = document.getElementById('preview-activity');
  const activitiesTableElement = document.getElementById('activities-table');
  const addActivityButton = document.getElementById('add-activity');

  addActivityButton.addEventListener('click', addActivityEvent);

  
  function addActivityEvent() {
    if (!activityElement.value || !intensityElement.value || !caloriesElement.value || 
      !durationElement.value || !dateElement.value) {
        return;
    }
  
    let newLiElement = CreateNewLiElement();
    previewUlElement.appendChild(newLiElement);
  }

  function CreateNewLiElement() {
    let li = document.createElement('li');

    let article = document.createElement('article');

    let pActivity = document.createElement('p');
    pActivity.innerHTML = `Actiity: ${activityElement.value}`;

    let pIntensity = document.createElement('p');
    pIntensity.innerHTML = `Intensity: ${intensityElement.value}`;

    let pDuration = document.createElement('p');
    pDuration.innerHTML = `Duration: ${durationElement.value} min.`;

    let pDate = document.createElement('p');
    pDate.innerHTML = `Date: ${dateElement.value}`;

    let pCalories = document.createElement('p');
    pCalories.innerHTML = `Calories: ${caloriesElement.value}`;

    article.appendChild(pActivity);
    article.appendChild(pIntensity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);

    let divContainer = document.createElement('div');
    divContainer.classList.add('btn-container');

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', editActivity);

    let nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.innerHTML = 'Next';
    nextButton.addEventListener('click', nextAtcivity);

    divContainer.appendChild(editButton);
    divContainer.appendChild(nextButton);

    article.appendChild(divContainer);

    li.appendChild(article);

    addActivityButton.setAttribute('disabled', '');

    activityElement.value = '';
    intensityElement.value = '';
    caloriesElement.value = '';
    durationElement.value = '';
    dateElement.value = '';

    return li;
  }

  function editActivity(e) {
    let liElement = e.target.parentElement.parentElement.parentElement;
    let articleElements = Array.from(liElement.querySelector('article').children);

    activityElement.value = articleElements[0].innerHTML.split(' ')[1];
    intensityElement.value = articleElements[1].innerHTML.split(' ')[1];
    durationElement.value = articleElements[2].innerHTML.split(' ')[1];
    dateElement.value = articleElements[3].innerHTML.split(' ')[1];
    caloriesElement.value = articleElements[4].innerHTML.split(' ')[1];

    addActivityButton.removeAttribute('disabled');

    liElement.remove();
  }

  function nextAtcivity(e) {
    addActivityButton.removeAttribute('disabled');

    let liElements = Array.from(previewUlElement.children);

    liElements.forEach(li => {
      let article = Array.from(li.querySelector('article').children);

      let activity = article[0].innerHTML.split(' ')[1];
      let intensity = article[1].innerHTML.split(' ')[1];
      let duration = article[2].innerHTML.split(' ')[1];
      let date = article[3].innerHTML.split(' ')[1];
      let calories = article[4].innerHTML.split(' ')[1];

      let trElement = CreateTrElement(activity, intensity, duration, date, calories);
      activitiesTableElement.appendChild(trElement);
    });

    liElements.forEach(li => {
      li.remove();
    });
  }

  function CreateTrElement(activity, intensity, duration, date, calories) {
    let trElement = document.createElement('tr');

    let tdActivity = document.createElement('td');
    tdActivity.classList.add('type-cell');
    tdActivity.innerHTML = activity;

    let tdDuration = document.createElement('td');
    tdDuration.classList.add('duration-cell');
    tdDuration.innerHTML = duration;

    let tdCalories = document.createElement('td');
    tdCalories.classList.add('calories-cell');
    tdCalories.innerHTML = calories;

    let tdDate = document.createElement('td');
    tdDate.classList.add('date-cell');
    tdDate.innerHTML = date;

    let tdIntensity = document.createElement('td');
    tdIntensity.classList.add('intensity-cell');
    tdIntensity.innerHTML = intensity;

    let tdButton = document.createElement('td');
    tdButton.classList.add('btn-cell');

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', deleteAcctivity);

    tdButton.appendChild(deleteButton);

    trElement.appendChild(tdActivity);
    trElement.appendChild(tdDuration);
    trElement.appendChild(tdCalories);
    trElement.appendChild(tdDate);
    trElement.appendChild(tdIntensity);
    trElement.appendChild(tdButton);

    return trElement;
  }

  function deleteAcctivity(e) {
    e.target.parentElement.parentElement.remove();
  }
}