import { useState } from "react"
import Form from "./Form"
import Weather from "./Weather"
import Forecast from "./Forecast";

export default function WeatherArea(){
    const [isData, setIsData] = useState(false);
    const [dataDesc, setDataDesc] = useState("");
    const [dataTemp, setDataTemp] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [tomorrowTemp, setTomorrowTemp] = useState("");
    const [afterTomorrow, setAfterTomorrow] = useState("");
    
    const [tomorrowDate, setTomorrowDate] = useState("");
    const [afterTomorrowDate, setAfterTomorrowDate] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");
    






    function handleDataState(theTemp, theDesc, theIcon, tTemp, afTemp) {
        const date =  new Date().getDate() + "/" + (new Date().getMonth() + 1);

        
        const posDate = (new Date().getDate() + 1) + "/" + (new Date().getMonth() + 1);
        const posPosDate = (new Date().getDate() + 2) + "/" + (new Date().getMonth() + 1);
        setTomorrowDate(posDate);
        setAfterTomorrowDate(posPosDate);

    

        setIsData(true);
        setDataTemp(theTemp)
        setDataDesc(theDesc);
        setCurrentDate(date);
        setTomorrowTemp(tTemp);
        setAfterTomorrow(afTemp);
        setWeatherIcon(theIcon);
        
    }

    return (
        <div className="w-[70%] h-[75%] mx-auto bg-[#1F1D1D]/70 rounded-md shadow-[inset_2px_2px_20px_5px_black]  flex flex-col items-center justify-center gap-y-2
        md:w-[50%] 
        lg:w-[40%] 
        ">
        <Form dataState={handleDataState}/>
        <div className={isData ? "flex flex-col justify-center items-center" : "invisible" }>
        <Weather currentDate={currentDate} temp={dataTemp} description={dataDesc} wIcon={weatherIcon}/>
        <Forecast firstDDay={tomorrowDate} firstTDay={tomorrowTemp} secondDDay={afterTomorrowDate} secondTDay={afterTomorrow}/>
        
        </div> 
        </div>
        
    )
}