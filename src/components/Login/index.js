import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../../resources/img/pantalla1_web.png'
import './index.css';

export const Login = () => {
    return (
        <div className="content">
            <div className="image">
                <img src={logo} className="image__size"></img>
            </div>
            <div className="form">
                <div className="form--header">
                    <p className="text__gray">¿Tienes alguna duda?</p>
                    <p className="text__left text__blue"><FontAwesomeIcon icon={faPhoneAlt}/> (01) 411 6001</p>
                </div>
                <div className="form--body">
                    <div className="form--body--title">
                        <label className="text_dark">Déjanos tus datos</label>
                    </div>
                    <div className="form--body--input-group">
                        <div className="form--body--select">
                            <select className="text__dark">
                                <option value="DNI" selected>DNI</option>
                                <option value="CE">C.E</option>
                            </select>
                            <i></i>
                        </div>
                        <input type="text" placeholder="Nro. de doc" autoComplete="off"></input>
                    </div>
                    <div className="form--body--input">
                        <input type="text" placeholder="Celular"></input>
                    </div>
                    <div className="form--body--input">
                        <input type="text" placeholder="Placa"></input>
                    </div>
                    <div className="form--body--check">
                        <input type="checkbox"  placeholder="Placa"></input>
                        <p className="form--body--check__fontsize text__gray">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</p>
                    </div>
                    <div className="form--body--button">
                        <button className="button button__red">Cotizalo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
