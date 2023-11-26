import './Form.css'
import React, { useState } from 'react';
import emailjs from 'emailjs-com'

function Form() {

    
    // NAME LASTNAME input
    const [nameLastname, setNameLastname] = useState('')
    const [nameLastnameErrorMessage, setNameLastnameErromMessage] = useState('#fff')
    // PHONE input    
    const [phone, setPhone] = useState('')
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('#fff')
    // EMAIL input
    const [email, setEmail] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('#fff')
    // CITY input
    const [city, setCity] = useState('')
    //MESSAGE input
    const [message, setMessage] = useState('')
    const [messageErrorMessage, setMessageError] = useState('#fff')

    const [senderError, setSenderError] = useState(true)

    function lahettin(e) {
        e.preventDefault();
        if (nameLastname === '' || nameLastname.length < 4) {
            setNameLastnameErromMessage('#ff000030')
            setSenderError(true)
        } else {
            setNameLastnameErromMessage('#fff')
            setSenderError(false)
        }
        if (phone === '' || phone.length < 7) {
            setPhoneErrorMessage('#ff000030')
            setSenderError(true)
        } else {
            setPhoneErrorMessage('#fff')
            setSenderError(false)
        }
        if (email === '' || phone.length < 7) {
            setEmailErrorMessage('#ff000030')
            setSenderError(true)
        } else {
            setEmailErrorMessage('#fff')
            setSenderError(false)
        }

        if (message === '') {
            setMessageError('#ff000030')
            setSenderError(true)
        } else {
            setMessageError('#fff')
            setSenderError(false)
        }
        if (!senderError){
         
            console.log("hurra")

            e.preventDefault();

            emailjs.sendForm('service_pk8kpzf', 'template_l9tzmds', e.target, '1wQyMHQyPQx6upzdR')
              .then((result) => {
                  console.log(result.text);
                  alert('Viesti Lähetetty')
                  setEmail('')
                  setPhone('')
                  setMessage('')
                  setNameLastname('')
                  setCity('')

              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
        }
    }

    const errorHandler = (e) => {

    }




    return (


        <>
            <form  onSubmit={lahettin}>
            <div className='formMAindiv'>
                <p className='Yhteys'>
                    Pyydä Tarjous:
                </p>
                <div className='upForm'>
                    <h5 className='myH5' >Jos tarvitset tarjouksen, ota rohkeasti yhteyttä</h5>
                    <label className='labelHalf' >
                        <p className='LabelP'>Nimi*</p>
                        <input className='inputNamePhone' type="text" placeholder='Etunimi Sukunimi' value={nameLastname} onChange={(e) => setNameLastname(e.target.value)} style={{ backgroundColor: nameLastnameErrorMessage }} name='from_name' />
                    </label>
                    <label className='labelHalf'>
                        <p className='LabelP'>Puhelinnumero*</p>
                        <input className='inputNamePhone' type="text" placeholder='0453400453' style={{ backgroundColor: phoneErrorMessage }} value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={"10"} name='my_phone' />
                    </label>
                    <br />
                    <p className='LabelP'>Sähköpostiosoite*</p>
                    <input className='Inputik' type="text" placeholder='vl.rakennus@gmail.com' style={{ backgroundColor: emailErrorMessage }} value={email} onChange={(e) => setEmail(e.target.value)} maxLength={"40"} name='email_from' />
                    <br />
                    <p className='LabelP'>Paikakunta</p>
                    <input className='Inputik' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Uusimaa' maxLength={"15"} />
                    <br />
                    <div>
                        <p className='LabelP'> Viesti*  <p style={{ float: 'right' }} className='LabelP'> {message.length}/1000 </p>  </p>

                    </div>
                    <textarea onBlur={e => errorHandler(e)} className='Inputik' style={{ backgroundColor: messageErrorMessage }} value={message} onChange={(e) => setMessage(e.target.value)} maxLength={"1000"} name='message'></textarea>
                    <br />
                    <input className='NappiSoitta1' type="submit" value="Lähettä" />
              
                    <a href='https://www.facebook.com/ladislav.lahna/' target='_balnk'><img className='someLogos' src='facebook.png' alt="facebook" /></a>
                    <a href='tel:+358453400453'><img className='someLogos' src='phoneLogo.png' alt="call" /></a>


                </div>
                <br />

            </div>
            </form>


        </>
    );
}
export default Form;