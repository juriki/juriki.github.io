import './Form.css'
import React from 'react';

function Form() {
    return (

        <>
              
                    <div className='UpForm'>
                        <p className='Yhteys'>
                        OTA YHTEYTTÄ
                        </p>
                    <h6 >
                        Vastaamme kaikkiin tiedusteluihin ja tarjouspyyntöihin mahdollisimman nopeasti!
                        </h6>
                        <div className='test'>
                        <label >
                            <input type="text" placeholder='Nimi' />
                        </label>
                        <br />
                        <label>
                            <input type="text" placeholder='Sähköposti' />
                        </label>
                        <br />
                        <label>
                            <input type="text" placeholder='Puhelin' />
                        </label>
                        <br />
                        <label>
                            <textarea placeholder='Viesti'></textarea>
                        </label>
                        </div>

                    <br />
                    <button className='NappiSoitta'>Lähettä</button>
                    </div>
              
        </>
    );
}
export default Form;