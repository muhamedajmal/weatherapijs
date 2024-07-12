const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = 'c710832c5ec6b0f256bfd9a92b680eb0';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
console.log();
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            // const bg = document.querySelector('.bodybackground');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                case 'mist':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            switch(json.weather[0].main){
                case 'clear':
                 urlsa = "url(./videos/clear.gif)";
                 break;
                 case 'Rain':
                 urlsa = "url(./videos/rain.gif)"
                 break;
                 case 'snow':
                 urlsa = "url(https://www.myincrediblewebsite.com/wp-content/uploads/2017/01/Snowy-branch.gif)"
                 break;
                 case 'mist':
                 urlsa = "url(https://i.pinimg.com/originals/02/8f/c0/028fc0f58b6d275812336e90c6ba4251.gif)"
                 break;
                 case 'haze':
                 urlsa = "url(https://i.pinimg.com/originals/02/8f/c0/028fc0f58b6d275812336e90c6ba4251.gif)"
                 break;
                 case 'clouds':
                 urlsa = "url(https://i.pinimg.com/originals/85/db/41/85db411e5bebff00b8a21f6d29d8c394.gif)"
                 break;
                 
             default:
               urlsa="url(./videos/clear.gif)"
       
             }
             document.getElementById("bgimg").style.backgroundImage=urlsa;


             switch(json.weather[0].main){
                case 'clear':
                 urlsa = "url(https://wallpapers.com/images/hd/clouds-4k-b1dk1v9qfzneuyr2.jpg)";
                 break;
                 case 'Rain':
                 urlsa = "url(https://c1.wallpaperflare.com/preview/196/169/125/rain-glass-within-wet.jpg)"
                 break;
                 case 'snow':
                 urlsa = "url(https://images.unsplash.com/photo-1551582045-6ec9c11d8697?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D)"
                 break;
                 case 'mist':
                 urlsa = "url(./videos/rain.gif)"
                 break;
                 case 'haze':
                 urlsa = "url(./videos/mist.gif)"
                 break;
                 case 'clouds':
                 urlsa = "url(./videos/cloud.gif)"
                 break;
                 
             default:
               urlsa="url(./videos/clear.gif)"
       
             }
             document.getElementById("bgpic").style.backgroundImage=urlsa;

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});