import Form from '../Form/Form';
import './HomaPage.css'
import Palvelut from '../Palvelut/Palvelut';
//import UncontrolledExample from '../Components/Carousel';
import React from 'react';
import Galleri from '../Gallery/Gallery';


function HomePage() {
    return (
        <>
            <div className='ImageDiv' >
                <img
                    className='tyoKuvaHome' src="vladPict8.png" alt="Main" />
            </div>

            <h1 className='WelcomeText'>
                TERVETULOA
            </h1>
            <div className='RadiusImage'>
                <img src="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" id="1726990206" class="" data-dm-image-path="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" onerror="handleImageLoadError(this)" alt="nice" />
            </div>
            <div className='TextDiv'>
                <h3>Olemme erikoistuneet märkätilojen uudis- ja korjausrakentamiseen sekä tarjoamme myös muita rakennus- ja saneerauspalveluita. Meille on tärkeä asiakkaiden tyytyväisyys ja korkealaatuinentyönjälki. </h3>
            </div>
        
            <div style={{width:"100%",  backgroundColor:"white", height:"auto"}}>
            <Galleri />
            </div>
            <Palvelut />
            
            <div style={{backgroundColor:"white"}}>
                <div className='formDivContactPage'>
                    <Form  />
                </div>
                <div>
                    <img className='logo' src='VladLogo.png' alt="vl-rakennus-ja-valvonta"/>
                </div>
            </div>
  

        </>


    );
}

export default HomePage;









