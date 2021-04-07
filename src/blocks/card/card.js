import React from "react"

const Card = ({key, other, text, user}) => {
    return (<div className="box" style={{'maxWidth':'300px'}} key={key}>
        <p className="title">{user}</p>
        <p className="subtitle">{other}</p>
        <div className="card-content">{text}</div>
    </div>)
}

export default Card