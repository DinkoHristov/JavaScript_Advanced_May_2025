function notify(message) {
  const divNotification = document.getElementById('notification');

  divNotification.innerHTML = message;

  if (divNotification.style.display == 'none' || divNotification.style.display == '') {
    divNotification.style.display = 'block';
  } 

  divNotification.addEventListener('click', () => {
    divNotification.style.display = 'none';
  });
}