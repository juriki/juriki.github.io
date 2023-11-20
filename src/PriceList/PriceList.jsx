import React from 'react'
import './PriceList.css'

function PriceList(props) {
    return (
        <>
            <div className='priceTabelMainDiv'>
                <p className='labelText'>{props.palveluNimi}</p>
                <p className='otherText'>{props.otherText}</p>
                <table >
                    <tr>
                        <th className='thTyo'>Työ</th>
                        <th>Hina</th>
                    </tr>
                    {props.tyot.map((tyo, index) => {
                        return (
                            <tr>
                                <td>{tyo}</td>
                                <td>{props.hinta[index]}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    );
}

export default PriceList;
