import './Carousel.css'
import React from 'react';


function UncontrolledExample() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li  data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
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

