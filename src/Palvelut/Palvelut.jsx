import React from 'react'
import './Palvelut.css'

function Palvelut() {
    const sisatilat = ["Sisämaalaus", "Tapetointi", "Väliseinä", "Rakentaminen", "Vinyylikatto", "Kangaskatto", "Panelointi", "Kalusteiden", "Asennus", "Keittiöremontti", "Kylpyhuoneremontti", "Pienet putkityöt", "Laatoitus", "Sauna", "Laattasaumojen vaihto", "Epoxy pinnoitus"]

    const ulkotilat = ["Vinyyliverhous", "Terassien", "Rakentaminen", "Ulkomaalaus", "Pienrakennusten", "Rakentaminen"]

    return (
        <>
            <div className='divv'>
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
            </div>

        </>
    );
}

export default Palvelut;


