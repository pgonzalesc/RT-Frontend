import React from 'react';

export const Button = ({onClick, text}) => {
    return (
        <div className="content--button">
            <button className="button button__red" onClick={onClick}>{text}</button>
        </div>
    )
}
