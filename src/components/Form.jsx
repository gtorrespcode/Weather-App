import { useEffect, useState } from "react"
import { BiSearchAlt } from "react-icons/bi"
import axios from "axios";



export default function Form(props){

    
    
    const [inputValue, setInputValue] = useState("");

    


    function handleChange(event){
        setInputValue(event.target.value);
        
        
    }

    function handleClick(event){
        event.preventDefault();
        

        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=" + process.env.API_KEY + "&lang=pt_br&units=metric")
        .then(response => {
            
            const theTemperature = Math.floor(response.data.main.temp) + "º";
            const theDescription = response.data.weather[0].description;
            const weatherIcon = response.data.weather[0].icon;
            

            axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue + "&appid=" + process.env.API_KEY + "&lang=pt_br&units=metric")
            .then(response => {

                const theTomorrowTemp = Math.floor(response.data.list[7].main.temp)  + "º";
                const afterTomorrowTemp = Math.floor(response.data.list[15].main.temp)  + "º"

                props.dataState(theTemperature, theDescription, weatherIcon, theTomorrowTemp, afterTomorrowTemp);
                
        })
        .catch(err => {
            console.log(err);
        });

               
        })
        .catch(err => {
            console.log(err);
            alert("Erro ao procurar cidade. Certifique-se de que digitou corretamente o nome da sua cidade.");
        });


    }

   



    return (
        <form className="flex items-center gap-x-[1.5px]" >
            <input type="text" name="city" placeholder="Digite a cidade" 
            className="  p-2 text-xs text-center bg-[#D9D9D9] h-8 focus:outline-0 shadow-[inset_1px_1px_3px_black]"
            onChange={handleChange}
            />
            <button type="submit" 
            onClick={handleClick}
            className="bg-white text-xs py-2 px-3  h-8 active:scale-90 shadow-[inset_1px_1px_3px_black] 
            "><BiSearchAlt /></button>
        </form>
    )
}