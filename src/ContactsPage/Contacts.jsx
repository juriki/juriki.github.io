import Form from '../Form/Form';
import Palvelut from '../Palvelut/Palvelut';
import './ContactPage.css'
import React from 'react';

function Contacts() {

    return (
        <div className='PageTop'>
            <div>
                <div >
                    <Form />
                </div>
                <div>
                    <img className='logo' src='VladLogo.png' alt="Logo" />
                </div>

            </div>
            <div>
                <Palvelut />
            </div>
        </div>


    );
}

export default Contacts;