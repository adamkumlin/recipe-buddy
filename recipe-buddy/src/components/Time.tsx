type TimeProps = {
    minutes: string | null;
}

const Time: React.FC<TimeProps> = ({ minutes }) => {

    function formatTime(minutes: number) {
        let formattedTime: string = "";

        if (minutes >= 60) {
            formattedTime = (minutes / 60).toPrecision(2) + " h";
        } else {
            formattedTime = minutes + " min";
        }

        return formattedTime;
    }


    if (minutes != "0" && minutes != null) {
        return (
            <div className='Time'>
                <img className="clockIcon" src="/clock-icon.svg" alt="Clock icon" />
                <span>{formatTime(parseInt(minutes))}</span>
            </div>
        )
    } else {
        return null;
    }
}

export default Time;