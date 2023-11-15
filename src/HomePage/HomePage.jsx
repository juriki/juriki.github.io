import Form from '../Form/Form';
import './HomaPage.css'
import Palvelut from '../Palvelut/Palvelut';
import UncontrolledExample from '../Components/Carousel';
import React from 'react';


function HomePage() {
    return (
        <>
            <div className='ImageDiv' >
                <img
                    className='tyoKuvaHome'
                    src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20190909_110120-1920w.jpg"
                    alt="First slide" />
                <img
                    className='tyoKuvaHome'
                    src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20220104_130058-1920w.jpg"
                    alt="Seconssd slide" />
            </div>
            <div className='BigDiv'>

                <h1 className='WelcomeText'>
                    TERVETULOA
                </h1>
            </div>
            <div className='RadiusImage'>
                <img src="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" id="1726990206" class="" data-dm-image-path="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" onerror="handleImageLoadError(this)" alt="nice" />
            </div>
            <div className='ImageLogo'>
                <div className='TextDiv'>
                    <h3>Olemme erikoistuneet märkätilojen uudis- ja korjausrakentamiseen sekä tarjoamme myös muita rakennus- ja saneerauspalveluita. Meille on tärkeä asiakkaiden tyytyväisyys ja korkealaatuinentyönjälki. </h3>
                </div>
            </div>
            <div className='ImageLogoDiv'>
                <div>
                    <UncontrolledExample />
                </div>
            </div>
            <div className='FormDiv'>
                <Form />
            </div>
            <div className='test'>
                <Palvelut />
            </div>
        </>


    );
}

export default HomePage;









