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

  //Maldives
  let maldivesElement = document.querySelector('#maldives');
  let maldivesDateElement = maldivesElement.querySelector('.date');
  let maldivesTimeElement = maldivesElement.querySelector('.time');
  let maldivestime = moment().tz('Indian/Maldives');
  maldivesDateElement.innerHTML = maldivestime.format('dddd D MMMM YYYY');
  maldivesTimeElement.innerHTML = `${maldivestime.format(
    'h:mm:ss'
  )} <small>${maldivestime.format('A')}</small>`;
}, 1000);

function updateContent(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === 'current') {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace('_', ' ').split('/')[1];
  let cityTime = moment().tz(cityTimeZone);
  let containerContentElement = document.querySelector('#containerContent');
  containerContentElement.innerHTML = `
  <div class="cities">
           <div class="city-date">
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format('dddd D MMMM YYYY')}</div>
            </div>

            <div class="time">${cityTime.format(
              'h:mm:ss'
            )}<small>${cityTime.format('A')}</small>
            </div>
          </div>
          <a href="/"> All Cities</a>`;
}
let citydropdownSelect = document.querySelector('#citydropdown');
citydropdownSelect.addEventListener('change', updateContent);
