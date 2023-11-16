import './Carousel.css'
import React from 'react';


function UncontrolledExample() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img className='tyoKuva'src="vladPict2.png"alt="First slide" /> 
                    </div>
                    <div class="carousel-item">
                    <img className='tyoKuva'src="vladPict3.png"alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img className='tyoKuva'src="vladPict7.png"alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="tyoKuva" src="vladPict4.png" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Edellinen</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Seurava</span>
                </a>
            </div>


        </>

    );
}

export default UncontrolledExample;




/* 


            <div class="carousel carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="" aria-label="Slide 1" aria-current="true" class="active"></button>
                    <button type="button" data-bs-target="" aria-label="Slide 2" aria-current="false"></button>
                    <button type="button" data-bs-target="" aria-label="Slide 3" aria-current="false"></button>
                    <button type="button" data-bs-target="" aria-label="Slide 4" aria-current="false"></button></div>
                <div class="carousel-inner"><div class="carousel-item-next carousel-item-start carousel-item">
                    <img class="tyoKuva" src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20190909_110120-1920w.jpg" alt="First slide"/>

                </div>
                    <div class="carousel-item">
                        <img class="tyoKuva" src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20220104_130058-1920w.jpg" alt="Second slide"/></div>
                    <div class="carousel-item">
                        <img class="tyoKuva" src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20190909_105951-1920w.jpg" alt="Third slide"/></div>
                    <div class="active carousel-item-start carousel-item">
                        <img class="tyoKuva" src="VladLogo.png" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" role="button" tabindex="0" href="#">
                    <span aria-hidden="true" class="carousel-control-prev-icon"></span>
                    <span class="visually-hidden"></span></a>
                <a class="carousel-control-next" role="button" tabindex="0" href="#">
                    <span aria-hidden="true" class="carousel-control-next-icon">

                    </span>
                    <span class="visually-hidden">Next</span></a>
                    </div>






                            <Carousel className='carousel' >
            <Carousel.Item>
                <img 
                    className='tyoKuva'
                    src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20190909_110120-1920w.jpg"
                    alt="First slide" /> 
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    className='tyoKuva'
                    src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20220104_130058-1920w.jpg"
                    alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='tyoKuva'
                    src="https://le-de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/opt/155229_IMG_20190909_105951-1920w.jpg"
                    alt="Third slide"/>
            </Carousel.Item>

            <a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Prsasdsdasdvious</span></a>
        </Carousel>
        

*/