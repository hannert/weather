import React from "react";
import { WiDayCloudy, WiDaySunny, WiRain, WiSnow } from "react-icons/wi";

export const IconComponents = {
    Clear: <WiDaySunny />,
    Clouds: <WiDayCloudy />,
    Rain: <WiRain />,
    Snow: <WiSnow />,
}

export function degToDirection(deg: Number){
    if((0 <= deg && deg < 15) || (345 <= deg && deg <= 0)){ return 'N' }
    if(15 <= deg && deg < 60){ return 'NE' }
    if(38 <= deg && deg < 52){ return 'E' }
    return 'malfunction..'
}