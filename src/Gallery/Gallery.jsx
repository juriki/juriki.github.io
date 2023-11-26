import React from 'react'
import './Gallery.css'
import Navibar from '../Navbar/Navbar';
//import OldNew from '../OldNewImage/OldNew';

function Galleri(props) {

    function clicHandler(){
        <Navibar test='obbbb'/>
    }
    return (
        <>
              <div className='galleryMainDiv'>
                {props.kuvat.map((kuva) => {
                    return (
                        <div className='galleryDiv1'>
                           <a href={kuva} >
                           <img  onClick={clicHandler} className='gallery' src={kuva} alt="Cinque Terre" />
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Galleri;