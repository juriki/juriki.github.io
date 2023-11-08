import Form from '../Form/Form';
import './HomaPage.css'
import Footer from '../Footer/footer';
import Palvelut from '../Palvelut/Palvelut';
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
                    alt="Second slide" />
            </div>
            <div className='BigDiv'>

                <h1 className='WelcomeText'>
                    TERVETULOA
                </h1>
                <button className='NappiSoitta'>Soita Heti</button>
                <div style={{ marginTop: 15,}}>
                    <a href='https://www.facebook.com' target='balnk'>
                        <img src='facebook.png' width={50} />
                    </a >
                    <a style={{ marginLeft: 15}} href='https://instagram.com/vladlahna?igshid=MzRlODBiNWFlZA==' target='balnk'>
                        <img src='Instagram.png' width={50} />
                    </a>           
                </div>
            </div>
            <div className='RadiusImage'>
                <img src="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" id="1726990206" class="" data-dm-image-path="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" onerror="handleImageLoadError(this)"></img>
            </div>
            <div className='ImageLogo'>
                <div className='TextDiv'>
                        <p> OLEMME ERIKOISTUNEET MÄRKÄTILOJEN UUDIS- JA KORJAUSRAKENTAMISEEN SEKÄ TARJOAMME MYÖS MUITA RAKENNUS- JA SANEERAUSPALVELUITA. MEILLE ON TÄRKEÄ ASIAKKAIDEN TYYTYVÄISYYS JA KORKEALAATUINEN TYÖNJÄLKI.</p>
                </div> 
            </div>
            <div className='ImageLogoDiv'>
                <div>
                    <img className='ImageLogo1' src='VladLogo.png' width={1} />
                </div>
            </div>
            <div className='FormDiv'>
                <Palvelut />
                <Form /> 
            </div>  
            <div className='Footerr'>
                <Footer />
                
            </div>   
        </>


    );
}

export default HomePage;









