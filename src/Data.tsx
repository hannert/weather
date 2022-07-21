import React from "react";
import Display from "./Display.tsx";
import styles from './Data.module.css'
import Potion from './potion.svg'

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
            latitude: '26.0998',
            longitude: '119.2966',
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

    randomizeLocation() {
        this.setState(() => {
            return {
                latitude: -90 + Math.random() * 180,
                longitude: -180 + Math.random() * 360
            }
        }, () => this.pingAPI())
    }

    render() {
        console.log(" render")
        return(
            <div className={styles.root}>
                <Display temperature = {this.state.currentWeather?.main?.temp} 
                        location = {this.state.currentWeather?.name}
                        condition = {this.state.currentWeather?.weather?.[0].main}
                        latitude = {this.state.latitude}
                        longitude = {this.state.longitude   }
                />
                <div className={styles.box}>
                    <div className={styles.buttonGroup}>
                        <button onClick={() => {this.updateLocation()}} className={styles.buttonA}> 
                            <div className={styles.blured}> 👋 </div>
                            <div>Use current location </div>
                        </button>
                        <button onClick={() => {this.randomizeLocation()}} className={styles.buttonA}>
                            <div className={styles.blured}> 🎲 </div>
                             RANDOM! 
                        </button>       
                    </div>
                </div>
            </div>
        )
    }




}