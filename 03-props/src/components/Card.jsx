import React from 'react'

const Card = (props) => {
        console.log(props)
        return (
        <div className="card">
                <img src={props.img} alt="" />
                <h1>
                        Name : {props.user}
                </h1>
                <h2>
                        Age : {props.age}
                </h2>
        </div>
        )
}

export default Card