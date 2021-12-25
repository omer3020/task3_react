import React from 'react'

export default function Recipe(props) {
    return (
        <div className='recipe'>
            <h3>{props.img}</h3>
            <h3>{props.name}</h3>
            <h3>{props.cook}</h3>
            <h3>{props.time}</h3>
        </div>
    )
}
