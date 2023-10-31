import './Form.css'

function Form() {
    return (

        <>
                <div className="LowForm" >
                    <div className='UpForm'>
                        <h1 style={{marginTop: 20}}>
                        OTA YHTEYTTÄ
                        </h1>
                    <h6 style={{ marginTop: 20, marginBottom: 30, }}>
                        Vastaamme kaikkiin tiedusteluihin ja tarjouspyyntöihin mahdollisimman nopeasti!
                        </h6>
                    <label>
                        <input type="text" placeholder='Nimi'/>
                    </label>
                    <br/>
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
                    <br />
                    <button>Lähettä</button>
                    </div>
                </div>
        </>
    );
}
export default Form;