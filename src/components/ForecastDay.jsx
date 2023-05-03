

export default function ForecastDay(props){

    return (

    <div className="text-white text-[0.80rem] bg-gradient-to-br from-[#034366] to-[#12A8F9] border-2 border-[#12A8F9] w-20 rounded-md shadow-[2px_2px_10px_5px_black] flex flex-col items-center justify-center gap-y-1">
        <p className="h-[50%] flex items-center justify-center">{props.fDay}</p>
        <p className="bg-[#035682] w-[100%] h-[50%] flex items-center justify-center">{props.fTemp}</p>

        </div>
    )
}

