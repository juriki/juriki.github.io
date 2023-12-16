import React from 'react'
import './Gallery.css'

function Galleri(props) {

 /*   function Form(e, kuva1) {
          console.log('You clicked submit.'+ e.name);
          console.log('You clicked submit.' + kuva1);
    }
*/
    return (
        <>
            <h3 style={{textAlign: 'center'}}>{props.tyoNimi}</h3>
              <div className='galleryMainDiv'>
   
                {props.kuvat.map((kuva) => {
                    return (        
                        <div className='galleryDiv1'>                   
                           <img className='gallery' src={kuva} alt="Cinque Terre" onClick={() => props.onPhotoClick(kuva) } name={kuva}  style={{cursor: 'pointer'}}/>             
                        </div>
                        
                    )
                })}
            </div>
            <hr style={{borderWidth: '3px'}}/>
        </>
    );
}

export default Galleri;