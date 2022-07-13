import React from "react";

type MyProps = {
    title: string
}

type MyState = {
    currentWeather: any
}

// function pingAPI(){
//     // console.log(process.env.REACT_APP_OPEN_WEATHER_MAP_URL)
//     let request = new XMLHttpRequest()
//     request.open('GET', (process.env.REACT_APP_OPEN_WEATHER_MAP_URL! + process.env.REACT_APP_OPEN_WEATHER_MAP_KEY!))
//     request.send()
//     request.onload = function() {
//         console.log ("loaded")
//         let data = JSON.parse(this.response)
//         console.log(data)        
//     }
//     console.log(request.response)


// }

export default class Data extends React.Component<MyProps, MyState>{

    

    constructor(props){
        super(props)
        this.state = {
            currentWeather: "Empty RN",
        }
    }

    componentDidMount() {
        console.log(process.env)

        console.log("Mounted")
        this.test()
    }
    private pingAPI(){
        // console.log(process.env.REACT_APP_OPEN_WEATHER_MAP_URL)
        // let request = new XMLHttpRequest()
        // request.open('GET', (process.env.REACT_APP_OPEN_WEATHER_MAP_URL! + process.env.REACT_APP_OPEN_WEATHER_MAP_KEY!))
        // request.send()
        // let data
        // request.onload = function() {
        //     console.log ("loaded")
        //     data = JSON.parse(this.response)
        //     console.log(data)        
        // }

        fetch((process.env.REACT_APP_OPEN_WEATHER_MAP_URL! + process.env.REACT_APP_OPEN_WEATHER_MAP_KEY))
            .then(raw => console.log(raw))   
            .then(newData => this.setState( () => {
                return{currentWeather: newData}
            })
            )
            

        // this.setState((props,state) => {
        //     return{currentWeather: data.id}
        // })
        
        
    
    
    }
    test(){
        setInterval(()=>{this.pingAPI()}, 10000)
    }

    render() {
        console.log(" render")
        return(
            <div>
            <div>Hi</div>
            <div>{this.state.currentWeather}</div>
            </div>
        )
    }



}