import React from "react"
import "./styles.css"

export default (props) => {
    return(
        <div className="divider">
            <p className="divider-text">{props.title}</p>
            <hr className="divider-line"/>
        </div>
    )
}