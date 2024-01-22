import Form from '../Form/Form';
import Palvelut from '../Palvelut/Palvelut';
import './ContactPage.css'
import React from 'react';

function Contacts() {

    return (
        
        <div className='PageTop'>
            <div>
                <div className='formDivContactPage'>
                    <Form  />
                </div>
                <div>
                    <img className='logo' src='VladLogo.png' alt="vl-rakennus-ja-valvonta"/>
                </div>
            </div>
            <div>
                <Palvelut />
            </div>
        </div>


    );
}

export default Contacts;