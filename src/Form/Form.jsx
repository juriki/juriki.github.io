import './Form.css'
import React, { useState } from 'react';

function Form() {

    const [nameLastname, setNameLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')

    function lahettin(){
        if (email.length === '' || nameLastname === ''  || message === '' ){
            alert("Joku kentä on tyhja TEST DEBUG  TODO Delete ")
            console.log("Error")
        }else{
            alert("Hei " + nameLastname + " Sinun puhelin " + phone + email + " meilä otamme yhtytä sinun!" )
        }
     
    }


    return (


        <>
              <div className='divv'>
              <p className='Yhteys'>
                        Pyydä Tarjous
                        </p>
                    <div className='UpForm'>
                    <h6 >
                        Jos tarvitset tarjouksen, ota rohkeasti yhteyttä
                        </h6>
                        <div className='test1'>
                        <label >
                        <p className='LabelP'>Nimi*</p>

                            <input className='inputNamePhone' type="text" placeholder='Etunimi Sukunimi' value={nameLastname} onChange={(e)=> setNameLastname(e.target.value)} />
                        </label>
                        <label>
                        <p className='LabelP'>Puhelinnumero*</p>
                            <input className='inputNamePhone' type="text" placeholder='050 1234 567' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                        </label>
                        <br />
                        <label>
                        <p className='LabelP'>Sähköpostiosoite*</p>
                            <input type="text" placeholder='sähköposti@osoitte.fi' value={email} onChange={(e)=> setEmail(e.target.value)}  />
                        </label>
                        <br />
                        <label>
                        <p className='LabelP'>Paikakunta</p>
                            <input type="text"  value={city} onChange={(e)=> setCity(e.target.value)} />
                        </label>
                        <br />
                        <label>
                        <p className='LabelP'>Viesti*</p>
                            <textarea className='texArea'  value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                        </label>
                        <button className='NappiSoitta1' onClick={lahettin}>Lähettä</button>
                        </div>
                    <br />
                    </div>
              </div>

              
        </>
    );
}
export default Form;