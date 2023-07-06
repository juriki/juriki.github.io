import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function UncontrolledExample() {
    return (
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
        </Carousel>
    );
}

export default UncontrolledExample;