import './Form.css'
import React, { useState } from 'react';

function Form() {

    const [nameLastname, setNameLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')

    function lahettin() {
        if (email.length === '' || nameLastname === '' || message === '') {
            alert("Joku kentä on tyhja TEST DEBUG  TODO Delete ")
            console.log("Error")
        } else {
            alert("Hei " + nameLastname + " Sinun puhelin " + phone + email + " meilä otamme yhtytä sinun!")
        }

    }


    return (


        <>
            <div className='formMAindiv'>
                <div className='mainText'>
                <p className='Yhteys'>
                    Pyydä Tarjous:
                </p>
                </div>

                <div className='upForm'>
                    <h5 >
                        Jos tarvitset tarjouksen, ota rohkeasti yhteyttä
                    </h5>

                    <label className='labelHalf' >
                        <p className='LabelP'>Nimi*</p>
                        <input className='inputNamePhone' type="text" placeholder='Etunimi Sukunimi' value={nameLastname} onChange={(e) => setNameLastname(e.target.value)} />
                    </label>
                    <label  className='labelHalf'>
                        <p className='LabelP'>Puhelinnumero*</p>
                        <input className='inputNamePhone' type="text" placeholder='050 1234 567' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <br />
                    <label className='labelFull'>
                        <p className='LabelP'>Sähköpostiosoite*</p>
                        <input className='Inputik' type="text" placeholder='sähköposti@osoitte.fi' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label className='labelFull'>
                        <p className='LabelP'>Paikakunta</p>
                        <input className='Inputik'  type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    </label>
                    <br />
                    <label className='labelFull'>
                        <p className='LabelP'>Viesti*</p>
                        <textarea className='Inputik' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </label>
                    <br />
                    <button className='NappiSoitta1' onClick={lahettin}>Lähetä</button>
                    <a href='https://www.facebook.com/ladislav.lahna/' target='_balnk'>
                        <img className='someLogos' src='facebook.png' alt="facebook" />
                    </a>
                    <a href='https://www.instagram.com/ladlahna/?hl=en' target='_balnk'>
                        <img className='someLogos' src='instagramLogo.png' alt="instagram" />
                    </a>
                    <a href='tel:+35840000000'>
                        <img className='someLogos' src='phoneLogo.png' alt="call" />
                    </a>
                </div>
                <br />

            </div>



        </>
    );
}
export default Form;