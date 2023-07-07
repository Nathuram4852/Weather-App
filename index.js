let weather = {
    apiKey: "ae1db73e3b68d0f926c951adcd6214fd",
    fetchWeather: function (city) {
        this.displayWeather(false, false, city, true)
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid="
        + this.apiKey    
         )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data))
         .catch( err =>{
            console.log('check....')
            this.displayWeather(false, true, city)
        });

    },
    displayWeather: function(data, isError, city, loader){
       
        const { name } = data &&  data;
        let { icon,description } = data  &&  data.weather[0];
        const { temp,humidity } =data &&  data.main;
        const { speed } = data && data.wind;

        if ( isError ) {
            console.log('if called')
            document.querySelector(".city").innerHTML= 'No result found' ;
            // document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon + ".png";
            // document.querySelector(".description").innerHTML= 'No result Found !!';
            document.querySelector(".icon").src =' ';
            document.querySelector(".description").innerHTML= ' ';
            document.querySelector(".temp").innerHTML= ' ';
            document.querySelector(".humidity").innerHTML=  ' '
            document.querySelector(".wind-speed").innerHTML= ' ';        
             document.querySelector(".weather").classList.remove("loading");
             document.body.style.backgroundImage ="url('https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000')"
             document.body.style.backgroundSize = 'cover'
             document.body.style.backgroundRepeat = 'no-repeat'
             document.body.style.backgroundPosition = 'center'
            }
     
        else if (loader ) {
            console.log('else if called')
            document.querySelector(".city").innerHTML= 'Loading....' ;
            // document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon + ".png";
            // document.querySelector(".description").innerHTML= 'No result Found !!';
            document.querySelector(".icon").src =' ';
            document.querySelector(".description").innerHTML= ' ';
            document.querySelector(".temp").innerHTML= ' ';
            document.querySelector(".humidity").innerHTML=  ' '
            document.querySelector(".wind-speed").innerHTML= ' ';        
             document.querySelector(".weather").classList.remove("loading");
             document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"
             document.body.style.backgroundSize = 'cover'
             document.body.style.backgroundRepeat = 'no-repeat'
             document.body.style.backgroundPosition = 'center'

        }
        else {
            console.log('else called')
            document.querySelector(".city").innerHTML= "" + name;
            document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerHTML= description;
            document.querySelector(".temp").innerHTML= temp + "°c";
            document.querySelector(".humidity").innerHTML=  "Humidity:" + humidity + "%"
            document.querySelector(".wind-speed").innerHTML=  "wind speed:" + speed + "km/h";        
             document.querySelector(".weather").classList.remove("loading");
             document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')"
        }


    },
    search: function() {
         this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
    document.querySelector(".search button").addEventListener("click", function (){
        weather.search();
    });

    document.querySelector(".search-bar").addEventListener("keyup",function (event) {
        if (event.key=="Enter") {
            weather.search();
        }

    });