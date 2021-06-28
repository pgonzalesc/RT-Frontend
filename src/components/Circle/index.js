import React from 'react'

export const Circle = ({text, state='Active'}) => {
    if(state === 'Active') {
        return (
            <div className="circle circle__active">{text}</div>
        )
    } else if(state === 'Inactive') {
        return (
            <div className="circle circle__inactive">{text}</div>
        )
    }
}
