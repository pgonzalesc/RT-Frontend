import React from 'react';
import '../../index.css';

export const Image = ({src}) => {
    return (
        <div className="image">
            <img src={src} className="image__size" alt={src}></img>
        </div>
    )
}
