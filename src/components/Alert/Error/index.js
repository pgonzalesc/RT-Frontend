import React from 'react'

export const Error = ({message}) => {
    return (
        <div className="message">
            <p className="message--error">{message}</p> 
        </div>
    )
}
