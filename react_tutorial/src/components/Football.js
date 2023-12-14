import React from 'react'

export default function Football(props) {
    const shoot = () => {
        if (props.nameF) {
            alert(`Bravo ${props.nameF}`)
        }
        //{nameF !== "" && alert("Bravo" . {props.nameF})}
    }
    return (
        <button onClick={shoot}>Tirez</button>
    )
}
