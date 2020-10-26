import React, { useEffect, useState } from "react"
import "./styles.css"
import icon from "../../assets/images"

export default () => {
    const [btnSwitch, setBtnSwitch] = useState(null)

    const onDarkMode = () => {
        document.body.classList.toggle("dark")
        setBtnSwitch(!btnSwitch)
        if(document.body.classList.contains("dark")){
            localStorage.setItem("dark-mode", `${"true"}`)
        } else{
            localStorage.setItem("dark-mode", `${"false"}`)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem("dark-mode")==="true"){
            setBtnSwitch(true)
            document.body.classList.add("dark")
        } else {
            setBtnSwitch(false)
            document.body.classList.remove("dark")
        }
    },[])

    return (
        <button  className={`swtchtheme-button ${btnSwitch && "swtchtheme-button__darkBG"}`} onClick={onDarkMode}>
            <span className={`switchtheme-circle ${btnSwitch && "swtchtheme-circle_darkX"}`}/>
            <span style={{backgroundImage: `url(${icon.Sun})`}} className="switchtheme-button_img"/>
            <span style={{backgroundImage: `url(${icon.Moon})`}} className="switchtheme-button_img"/>
        </button>
    )
}