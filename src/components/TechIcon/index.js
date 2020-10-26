import React from 'react'
import PropTypes from 'prop-types'
import "./styles.css"

function TechIcon({icon}) {
    return (
        <span
            style={{
                mask: `url(${icon})`,
                maskSize: "cover",
                WebkitMaskImage: `url(${icon})`,
                WebkitMaskSize: "cover",
            }}
            className="abilities-tech__item"
        />
    )
}

TechIcon.propTypes = {
    icon: PropTypes.string.isRequired
}

export default TechIcon


