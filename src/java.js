setInterval(function () {
  //London//
  let londonElement = document.querySelector('#London');
  let londonDateElement = londonElement.querySelector('.date');
  let londonTimeElement = londonElement.querySelector('.time');
  let londontime = moment().tz('Europe/London');
  londonDateElement.innerHTML = londontime.format('dddd D MMMM YYYY');
  londonTimeElement.innerHTML = `${londontime.format(
    'h:mm:ss'
  )} <small>${londontime.format('A')}</small>`;

  //Rome//
  let romeElement = document.querySelector('#Rome');
  let romeDateElement = romeElement.querySelector('.date');
  let romeTimeElement = romeElement.querySelector('.time');
  let rometime = moment().tz('Europe/Rome');
  romeDateElement.innerHTML = rometime.format('dddd D MMMM YYYY');
  romeTimeElement.innerHTML = `${rometime.format(
    'h:mm:ss'
  )} <small>${rometime.format('A')}</small>`;
}, 1000);
