import React, { useState } from 'react';
import image from '../../resources/img/pantalla1_web.png';
import './index.css';
import { Form } from '../../components/Form';
import { Image } from '../../components/Image';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    let msgErr = {};
    const history = useHistory();

    const handleRegister = e => {
        e.preventDefault();
        let state = '1';

        if(!data.document){
            state = '0';
            msgErr.document = '*El campo documento es obligatorio';
        }
        
        if(!data.phone){
            state = '0';
            msgErr.phone = '*El campo celular es obligatorio';
        }
        
        if(!data.placa){
            state = '0';
            msgErr.placa = '*El campo placa es obligatorio';
        }
        
        if(!data.check){
            state = '0';
            msgErr.check = '*Debe seleccionar la casilla';
        }

        if(state === '0')
            setError(msgErr);
        else {
            setError('');
            getPerson();
            history.push( "/Datos");
        }
    }

    const getPerson = async()=> {
        const url = 'https://randomuser.me/api/';
        const resp = await fetch(url);
        const {results} = await resp.json();
        console.log(results);
    }

    const handleChange = (e, name) => {
        let temp = {};
        temp[name] = e.target.value;
        if(name === 'check') {
            if(e.target.checked === false)
                temp[name] = undefined;
        }
        setData({...data, ...temp});
    }

    return (
        <div className="content">
            <Image src={image}/>
            <Form error={error} handleRegister={handleRegister} handleChange={handleChange}/>
        </div>
    )
}

export default Login;
