const tempfield = document.querySelector(".weather1");
const cityfield = document.querySelector(".weather2 p");
const timefield = document.querySelector(".weather2 span");
const emojifield = document.querySelector(".weather3 img");
const conditionfield = document.querySelector(".weather3 span");

const searchfield = document.querySelector(".searchfield");
const form = document.querySelector("form");
const button = document.querySelector("#btn");

let target = "delhi";

// Function to fetch data from the weather API --- 
const fetchdata = async(target) =>{

    try {
       
    const url = `https://api.weatherapi.com/v1/current.json?key=28cbd502456f42b8bdb81856232408&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    // Advance Destructuring ----
    const{
        current : 
        {
            temp_c , 
            condition : {text,icon}
        },
        location : {name,localtime},
     } = data;
     
    //  Calling function updateDOM with all values --
    updateDOM(`${temp_c}°`,name,localtime,icon,text)

    }
    catch (error) {

        alert("Location Not Found");
        
    }

}


// Function to Update the DOM ---

function updateDOM(temp,city,time,image,condition) {

    const exactTime = time.split(" ")[1];
    const exactdate = time.split(" ")[0];
    const exactday = new Date(exactdate).getDay();

    tempfield.innerHTML = temp;
    cityfield.innerHTML = city;

    timefield.innerHTML = `${exactTime} - ${getDayName(exactday)} ${exactdate}`;

    emojifield.src = image;
    conditionfield.innerHTML = condition;

}

// Function to get Day name -- 

function getDayName(exactday){

    switch(exactday)
    {
        case 0:
            return "Sunday";
            case 1:
                return "Mondat";
                case 2:
                    return "Tuesday";
                    case 3:
                        return "Wednesday";
                        case 4:
                            return "Thrusday";
                            case 5:
                                return "Friday";
                                case 6:
                                    return "Saturday";
                                    default:
                                        return "invalid day";

    }
    
}

// Event Listener on Button -- 
button.addEventListener("click",(e) =>{
    e.preventDefault();
    target = searchfield.value;
    fetchdata(target);
})

fetchdata(target);