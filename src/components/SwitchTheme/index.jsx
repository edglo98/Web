import React, { useEffect, useState } from "react"
import "./styles.css"
import icon from "../../assets/images"

export default () => {
    const [darkMode, setDarkmMode] = useState(false)
    const themeMode = () => {
        setDarkmMode(!darkMode)
        console.log(document.body)
    }

    useEffect(()=>{
        if(darkMode===true){
            document.body.style.backgroundColor="#1E1E1E"
            document.body.style.color="#FFFFFF"
            document.getElementById("header").style.backgroundColor="#1E1E1E"
        }else{
            document.body.style.backgroundColor="#FFFFFF"
            document.body.style.color="#1E1E1E"
            document.getElementById("header").style.backgroundColor="#FFFFFF"
        }
    },[darkMode])

    return (
        <button className={`swtchtheme-button ${darkMode? "swtchtheme-button__dark" : null}`} onClick={themeMode}>
            <span className="switchtheme-circle" style={darkMode? {left: -2} : {right: -2}}/>
            <span style={{backgroundImage: `url(${icon.Sun})`}} className="switchtheme-button_img"/>
            <span style={{backgroundImage: `url(${icon.Moon})`}} className="switchtheme-button_img"/>
        </button>
    )
}