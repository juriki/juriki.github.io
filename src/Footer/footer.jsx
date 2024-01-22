import './Footer.css'
import React from 'react';
function Footer() {
    return (
        <div className="Footer" >
            <div className='autocolums'>
                <div>
                    Otto Sonder<br />
                    Puhelin: <a href='tel:+358453400453'> 0453400453</a> <br />
                    sähköposti: <a href='mailto: vl.rakennus@gmail.com'>vl.rakennus@gmail.com</a><br />
                    VL Valvonta ja Rakennus, Y-tunnus: 3375062-5
                </div>
                <div>
                    Jessica Sonder<br />
                    Puhelin : <a href='tel:+358451073033'> 0451073033</a> <br />
                    Sähköposti : <a href='mailto: jds.rakennus@gmail.com'>jds.rakennus@gmail.com</a><br />
                    Sonder Rakennustyöt, Y-tunnus: 3375041-4

                </div>

            </div>
            <p className='pNavBar'>Sivun tekija: <a href='mailto: juritokvin@gmail.com'>juritokvin@gmail.com</a> </p>


        </div>
    );
}
export default Footer;
