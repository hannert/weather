import React from 'react'

export default function Display(props) {
    return(
        <div>
            Display:
            {props?.location &&            
                <div>Location: {props.location} </div>
            }
            <div>Temperature: {props?.temperature} </div>
        </div>
    )
}