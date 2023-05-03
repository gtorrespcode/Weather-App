import ForecastDay from "./ForecastDay"

export default function Forecast(props){

    return (
        <div className="w-60 h-20 rounded-md flex justify-evenly">
            
            <ForecastDay fDay={props.firstDDay} fTemp={props.firstTDay}/>
            <ForecastDay fDay={props.secondDDay} fTemp={props.secondTDay}/>
            
            
            
        </div>
    )

}