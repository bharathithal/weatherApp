const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const imgtime = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const udpateUI = (data) => {

    const city = data.name;
    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * -14400)
    const time = new Date(atlanta)
    console.log(time);

    const weather = Number(data['main']['temp'])-273.15;
    const str_weather = weather.toString();
    const result = Number(str_weather.slice(0, 4));
    const desc = data['weather'][0]['description'];

    details.innerHTML = `
    <h5 class="my-3">${city}</h5>
    <div class="my-3">${desc}</div>
    <div class="display-4 my-4">
        <span>${result}</span>
        <span>&deg;C</span>
    `;

    let timeSrc = null;
    if(weather>10) {

        timeSrc = './img/day.svg';
    }
    else {

        timeSrc = './img/night.svg';
    }

    imgtime.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')) {

        card.classList.remove('.d-none');
    }

        //remove the d-none class if present
    if(card.classList.contains('d-none')) {

        card.classList.remove('d-none');
    }

    };

cityForm.addEventListener('submit', e => {

    e.preventDefault();

    const city = cityForm.city.value.trim();
    getWeather(city)
    .then(data => udpateUI(data))
    .catch(err => console.log(err));
    
    localStorage.setItem('city', city);

    cityForm.reset();
});

if(localStorage.getItem('city')) {

    getWeather(localStorage.getItem('city'))
    .then(data => udpateUI(data))
    .catch(err => console.log(err));
}

//dark mode customizations
const options = {
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }

  const darkmode = new Darkmode(options);
  darkmode.showWidget();