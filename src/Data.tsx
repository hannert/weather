import React from "react";
import Display from "./Display.tsx";
import { RadioButton } from './Form.tsx'
type MyProps = {
    title: string

}

type MyState = {    
    latitude: string
    longitude: string
    currentWeather: any
}

export default class Data extends React.Component<MyProps, MyState>{


    constructor(props){
        super(props)
        this.state = {
            latitude: '10.82',
            longitude: '106.62',
            currentWeather: 'Empty',
        }
    }

    componentDidMount() {
        console.log("Mounted")
        this.pingAPI()
        setInterval(()=>{this.pingAPI()}, 10000)

    }

    private pingAPI(){
        fetch(("https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.latitude 
            + "&lon=" + this.state.longitude
            + "&appid="
            + process.env.REACT_APP_OPEN_WEATHER_MAP_KEY!)
            + "&units=imperial"
            ,{method: 'GET'})
            
            .then(raw => raw.json())
            .then(newData => this.setState( () => {
                console.log(newData)
                return{currentWeather: newData}
            })
            )   
    }

    private updateLocation(){
        if('geolocation' in navigator){
            console.log("geolocation is avaialbe")
            navigator.geolocation.getCurrentPosition((position) =>  {
                console.log(position)  
                this.setState((prevState, props) => {
                    return{latitude: position.coords.latitude, longitude: position.coords.longitude}
                }, () => this.pingAPI())
                
            }) 
        }
    }

    render() {
        console.log(" render")
        return(
            <div>
                <Display temperature={this.state.currentWeather?.main?.temp} location={this.state.currentWeather?.name}/>
                <div>{this.state.latitude}</div>
                <div>{this.state.longitude}</div>
                <button onClick={() => {this.updateLocation()}}> Use current location </button>
                <RadioButton />
            </div>
        )
    }



}