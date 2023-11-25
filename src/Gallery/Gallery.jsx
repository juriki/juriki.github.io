import React from 'react'
import './Gallery.css'

function Galleri(props) {



    return (
        <>
              <div className='galleryMainDiv'>
                {props.kuvat.map((kuva) => {
                    return (
                        <div className='galleryDiv1'>
                           <a href={kuva}>
                           <img className='gallery' src={kuva} alt="Cinque Terre" />
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Galleri;