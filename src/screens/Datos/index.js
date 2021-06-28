import React from 'react';
import './index.css';
import '../../index.css';
import Logo from '../../resources/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Circle } from '../../components/Circle';

const Datos = ({state}) => {
    console.log('state', state);
    return (
        <div className="panel">
            <div className="panel--header">
                <div className="panel--header--logo">
                    <img src={Logo} className="logo__size" alt={Logo}></img>
                </div>
                <div className="panel--header--contact">
                    <p className="text__gray">¿Tienes alguna duda?</p>
                    <p className="text__left text__blue"><FontAwesomeIcon icon={faPhoneAlt}/> (01) 411 6001</p>
                </div>
            </div>
            <div className="panel--body">
                <div className="panel--body--left">
                    <div className="item">
                        <Circle text="1" state="Active"/>
                        Datos del Auto
                    </div>
                    <div className="item">
                        <Circle text="2" state="Inactive"/>
                        Arma tu plan
                    </div>
                </div>
                <div className="panel--body--right">
                </div>
            </div>
        </div>
    )
}

export default Datos;
