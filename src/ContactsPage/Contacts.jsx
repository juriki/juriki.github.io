import Form from '../Form/Form';
import Palvelut from '../Palvelut/Palvelut';
import './ContactPage.css'
import React from 'react';

function Contacts() {
    
    return (
        <div className='PageTop'>   
            <div>
                <Form />  
            </div>
            <div>
                <img src='VladLogo.png' alt="nice"  /> 
            </div>

            <div>
                <Palvelut/>
            </div>
        </div>


    );
}

export default Contacts;