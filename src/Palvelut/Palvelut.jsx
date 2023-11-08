import React from 'react'
import './Palvelut.css'

function Palvelut() {
    const sisatilat = ["SISÄMAALAUS", "TAPETOINTI", "VÄLISEINÄ", "RAKENTAMINEN", "VINYYLIKATTO", "KANGASKATTO", "PANELOINTI", 
                         "KALUSTEIDEN", "ASENNUS", "KEITTIÖREMONTTI", "KYLPYHUONEREMONTTI", "PIENET PUTKITYÖT",
                        "LAATOITUS","SAUNA","LAATTASAUMOJEN VAIHTO","EPOXY PINNOITUS"]

    const ulkotilat = ["VINYYLIVERHOUS", "TERASSIEN", "RAKENTAMINEN","ULKOMAALAUS","PIENRAKENNUSTEN", "RAKENTAMINEN"]

    return (
        <>
            <h3 className='h3Size'>
                TARJOAMAT PALVELUT OVAT:
            </h3>
            <table >
                <tr>
                    <th>SISÄTILAT</th>
                    <th>ULKOTILAT</th>
                </tr>   
                        {sisatilat.map((sisa, index) => {
                            return (
                                <tr>
                                <td>{sisa}</td>
                                <td>{ulkotilat[index]}</td>
                                </tr>
                            )
                        })}    
            </table>
    </>
    );
}

export default Palvelut;


