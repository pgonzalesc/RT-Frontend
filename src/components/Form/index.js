import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Error } from '../Alert/Error';

export const Form = ({error, handleRegister, handleChange}) => {
    return (
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
                        <select id="type_document" name="type_document" className="text__dark" defaultValue="DNI">
                            <option value="DNI">DNI</option>
                            <option value="CE">C.E</option>
                        </select>
                        <i></i>
                    </div>
                    <input type="number" name="document" id="document" placeholder="Nro. de doc" onChange={e=>{handleChange(e, 'document')}} autoComplete="off" required></input>
                </div>
                <Error message={error.document}/>
                <div className="form--body--input">
                    <input type="number" name="phone" id="phone" placeholder="Celular" onChange={e=>{handleChange(e, 'phone')}} autoComplete="off" required></input>
                </div>
                <Error message={error.phone}/>
                <div className="form--body--input">
                    <input type="text" name="placa" id="placa" placeholder="Placa" onChange={e=>{handleChange(e, 'placa')}} autoComplete="off" required></input>
                </div>
                <Error message={error.placa}/>
                <div className="form--body--check">
                    <input type="checkbox" name="check" id="check" onChange={e=>{handleChange(e, 'check')}}></input>
                    <p className="form--body--check__fontsize text__gray">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</p>
                </div>
                <Error message={error.check}/>
                <div className="form--body--button">
                    <button className="button button__red" onClick={handleRegister}>Cotizalo</button>
                </div>
            </div>
        </div>
    )
}
