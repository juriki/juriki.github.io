import Form from '../Form/Form';
import Palvelut from '../Palvelut/Palvelut';
import './ContactPage.css'


function Contacts() {
    
    return (
        <div className='PageTop'>   
            <div>
                <Form />  
            </div>
            <div>
                <img src='VladLogo.png' /> 
            </div>

            <div>
                <Palvelut/>
            </div>
        </div>


    );
}

export default Contacts;