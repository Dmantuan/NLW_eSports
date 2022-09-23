// 18:00 -> 1080

export function convertHourStringToMinute(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number)

    if((0 <= hours && hours <= 24) && (0 <= minutes && minutes <= 59)){
        if(hours == 24 && minutes != 0){
            return Error();
        }
        else{
            const minutesAmount = (hours*60) + minutes;
            return minutesAmount;
        }
    }
    return Error();
}
