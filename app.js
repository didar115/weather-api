// default weather

const loader = document.querySelector(".spinner-grow");
const key = "ce630da98bbac5768413b33b7c3fb0fa";
const fetchData = (get) => {
	url = `https://api.openweathermap.org/data/2.5/weather?q=${get}&units=metric&appid=${key}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => GetData(data));
};
fetchData("dhaka");

// search by user
const didar = () => {
	const text = document.getElementById("search-field");
	const get = text.value;
	text.value = "";
	const getfetchData = fetchData(get);
};

const GetData = (data) => {
	const display = document.getElementById("display-data");
	loader.style.display = "block";
	display.style.display = "none";
//    set timeout for loading spinner 
	setTimeout(() => {
		loader.style.display = "none";
		display.style.display = "block";
		display.innerHTML = `
	       <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            
			<h1 class="display-1">${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1>${data.weather[0].main}</h1>`;
	}, 1200);
};
