const submitBtn = document.getElementById("submitBtn")
const setCityName = document.getElementById("city_name")
const dataHide = document.querySelector(".data_hide")
const setTemp = document.getElementById("temp")
const setTempIcon = document.getElementById("temp_status")
const setDay = document.getElementById("day")
const setDate = document.getElementById("date")




// for getting live date
const date = new Date()

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const day = week[date.getDay()]
const dateis = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
const month = `${dateis}, ${monthArr[date.getMonth()]}`

setDate.innerText = month
setDay.innerText = day



// Prevent input to reload the page
const getInfo = (event) => {
    event.preventDefault()
}




// API call
const apiCall = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    if (data.cod == "404") {
        setCityName.innerText = data.message
        setTemp.innerHTML = `null`
        setTempIcon.innerHTML = `<i class="fa-solid fa-cloud"></i>`
    }
    else {
        setData(data);
    }
}



// set data on DOM
const setData = (data) => {
    const iconId = data.weather[0].icon
    console.log(data.main.temp)
    iconUrl = "http://openweathermap.org/img/w/" + iconId + ".png"
    setTemp.innerHTML = `<span>${data.main.temp}</span><sup>o</sup> C`
    setCityName.innerHTML = `${data.name}, <span>${data.sys.country}</span>`
    setTempIcon.innerHTML = `<img id="wicon" src="${iconUrl}" alt="Weather icon">`

}


submitBtn.addEventListener("click", getInfo)

submitBtn.onclick = () => {
    const cityName = document.getElementById("cityName").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e50948c3de3094fc55d41687236b606a`
    const data = apiCall(url)

}



