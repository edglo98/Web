import React from "react"
import "./styles.css"

export default (props) => {
    let radius = 35;
    const height= 100
    const width=100
    let circumference = (radius * 2) * Math.PI;
    let progresing =(props.porcent * (circumference / 100)) - circumference;
    return(
        <div className="circleload-container">
            <svg
            height={height}
            width={width}
            >
                <circle
                    stroke="#CCC"
                    strokeWidth="7"
                    fill="transparent"
                    r={radius}
                    cx={height/2}
                    cy={width/2}
                />
                <circle
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx={height/2}
                    cy={width/2}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={progresing}
                    className="circleload-progress"
                />
            </svg>
            <p className="circleload-porcent">{`${props.porcent}/100`}</p>
        </div>

    )
}