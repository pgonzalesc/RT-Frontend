import React from 'react'

export const Image = ({src}) => {
    return (
        <div className="image">
            <img src={src} className="image__size" alt={src}></img>
        </div>
    )
}
