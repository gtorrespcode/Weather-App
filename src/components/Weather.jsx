

export default function Weather(props){

    return (
        <div className="text-white bg-gradient-to-br from-[#034366] to-[#12A8F9] border-2 border-[#12A8F9] shadow-[2px_2px_20px_5px_black] w-36 h-40  text-center rounded-md py-2  my-8"> 
        <p>{props.currentDate}</p>
        <p className="text-6xl py-2">{props.temp}</p>
        <div className=" flex items-center justify-around px-4">
        <p className="text-xs ">{props.description}</p>
        <img src={ props.wIcon ? "https://openweathermap.org/img/wn/" + props.wIcon + "@2x.png" : ""} className="w-12"/>
        </div>
        
        
        </div>
    )
}

