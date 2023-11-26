import React from 'react';
import Galleri from '../Gallery/Gallery';



function OldNew(props) {
    return (
        <>
                <div>
                   <h1>
                    {props.ok}
                    <Galleri  kuvat={["s","ok", "b", "c"]}/>
                   </h1>
                </div>
        </>
    );
}

export default OldNew;