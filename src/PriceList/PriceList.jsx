import React from 'react'
//import './PriceList.css'

function PriceList(props) {

    var hinta = "Hinta"

    return (
        <>

            <div>
                <h3 style={{marginBottom: "-10px"}}>
                    {props.palveluNimi}
                </h3>
                <p>{props.otherText}</p>
                <table >
                    <tr>
                        <th>Työ</th>
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
