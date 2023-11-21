import React from 'react'
import './Gallery.css'

function Galleri() {

    const kuvat = ["vladPict2.png", "vladPict10.png", "vladPict11.png", "vladPict4.png", "vladPict3.png", "vladPict1.png", "vladPict7.png", "vladPict8.png", "vladPict9.png", "vladPict5.png", "vladPict6.png",]


    return (
        <>
              <div className='galleryMainDiv'>
                {kuvat.map((kuva) => {
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