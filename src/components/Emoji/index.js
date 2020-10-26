import React from 'react'
import PropTypes from 'prop-types';

export default function Emoji({ e }) {
    return (
        <span role="img" aria-label="">
            &nbsp;{e}&nbsp;
        </span>
    )
}

Emoji.propTypes = {
    e: PropTypes.string.isRequired,
}