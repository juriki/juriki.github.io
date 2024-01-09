import React from 'react'
import './LoginPage.css'

function LoginPage() {

    return (
        <>
            <div style={{ paddingTop: "200px", textAlign:'center' }}>
                <div className='LittleDiv'>
                    <h1>Administration</h1>
                <input className='inputLogin'  type='text' placeholder='Login'></input> <br/>
                <input className='inputLogin' style={{margin: "20px"}} type='password' placeholder='Password'></input><br/>
                <button className='NappiSoitta' style={{margin: "20px", marginTop:'0px', marginBottom:'100px'}}>Kirjaudu</button>
                </div>

            </div>
        </>
    );
}

export default LoginPage;