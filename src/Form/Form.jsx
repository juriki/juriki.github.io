import './Form.css'
import React from 'react';

function Form() {
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
                            <input className='inputNamePhone' type="text" placeholder='Etunimi Sukunimi' />
                        </label>
                        <label>
                        <p className='LabelP'>Puhelinnumero*</p>
                            <input className='inputNamePhone' type="text" placeholder='050 1234 567' />
                        </label>
                        <br />
                        <label>
                        <p className='LabelP'>Sähköpostiosoite*</p>
                            <input type="text" placeholder='sähköposti@osoitte.fi' />
                        </label>
                        <br />
                        <label>
                        <p className='LabelP'>Paikakunta</p>
                            <input type="text" />
                        </label>
                        <br />
                        <label>
                        <p className='LabelP'>Viesti*</p>
                            <textarea className='texArea' ></textarea>
                        </label>
                        <button className='NappiSoitta1'>Lähettä</button>
                        </div>

                    <br />

                    </div>
              </div>

              
        </>
    );
}
export default Form;