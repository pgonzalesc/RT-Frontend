import React from 'react'

export const Select = ({id, name, className, defaultValue, arrayValue}) => {
    return (
        <div className="content--select">
            <select id={id} name={name} className={className} defaultValue={defaultValue}>
            {
                 arrayValue.map(element => (
                    <option value={element}>{element}</option>
                ))
            }
            </select>
            <i></i>
        </div>
    )
}
