import React from "react";

type MyProps = {
    title: string
}

type MyState = {
    currentWeather: any
}

export default class Data extends React.Component<MyProps, MyState>{


    constructor(props){
        super(props)
        this.state = {
            currentWeather: "Empty",
        }
    }

    componentDidMount() {
        console.log("Mounted")
        this.pingAPI()
        setInterval(()=>{this.pingAPI()}, 10000)

    }

    private pingAPI(){
        fetch((process.env.REACT_APP_OPEN_WEATHER_MAP_URL! + process.env.REACT_APP_OPEN_WEATHER_MAP_KEY!),{method: 'GET'})
            .then(raw => raw.json())
            .then(newData => this.setState( () => {
                console.log(newData)
                return{currentWeather: newData}
            })
            )
    }


    render() {
        console.log(" render")
        return(
            <div>
            <div className="tempBody">{this.state.currentWeather?.main?.temp}</div>
            </div>
        )
    }



}