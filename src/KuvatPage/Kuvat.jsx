//import UncontrolledExample from '../Components/Carousel';
//import PriceList from '../PriceList/PriceList';
import './Kuvat.css'
import { useState } from 'react';
import Galleri from '../Gallery/Gallery';


function Kuvat() {

    const [isKuvaShow, setIsKuvaShow] = useState(false)
    const [kuvaData, setKuvaData] = useState('0')
    const kylppari = ["/newImaiges/kyllpySauna1.png", "/newImaiges/kyllpySauna2.png", "/newImaiges/kyllpySauna3.png", "/newImaiges/kyllpySauna4.png",]
    const toiletSuhkku = ["/newImaiges/toiletSuhku1.png", "/newImaiges/toiletSuhku2.png", "/newImaiges/toiletSuhku3.png", "/newImaiges/toiletSuhku4.png",]
    const keittio = ["/newImaiges/ketio1.png", "/newImaiges/ketio2.png", "/newImaiges/ketio3.png", "/newImaiges/ketio4.png", "/newImaiges/ketio5.png",]
    const bedRoom = ["/newImaiges/bed2Room1.png", "/newImaiges/bed2Room2.png", "/newImaiges/bedRoom1.png", "/newImaiges/bedRoom2.png",]
    const stairs = ["/newImaiges/stairs1.png", "/newImaiges/stairs2.png",]
    const huoseOut = ["/newImaiges/HousOutDoor1.png", "/newImaiges/HousOutDoor2.jpg", "/newImaiges/HousOutDoor3.png",]
    const terassi = ["/newImaiges/terassa1.png", "/newImaiges/terassa2.png",]
    const katto = ["/newImaiges/katto1.png", "/newImaiges/katto2.png",]
    const smalHouse = ["/newImaiges/smallHouse1.png", "/newImaiges/smallHouse2.png"]

    const handlerPhotoClick = (imagename) => {
        setKuvaData(imagename)
        setIsKuvaShow(true)
    };

    function delteImage() {
        setKuvaData('')
        setIsKuvaShow(false)
    }

    return (
        <>

            <h1 style={{ paddingTop: "100px" }}>

            </h1>
            {!isKuvaShow &&
                <div>

                    <Galleri kuvat={kylppari} tyoNimi={'Kylpyhuone'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={toiletSuhkku} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={keittio} tyoNimi={'Keittiö'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={bedRoom} tyoNimi={'Makuhuone'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={stairs} tyoNimi={'Portatiden saneeraus'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={huoseOut} tyoNimi={'Julkisivut'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={katto} tyoNimi={'Kattoremontti'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={terassi} tyoNimi={'Terassi'} onPhotoClick={handlerPhotoClick} />
                    <Galleri kuvat={smalHouse} tyoNimi={'Pienrakennus'} onPhotoClick={handlerPhotoClick} />
                </div>
            }
            {isKuvaShow &&
                <div className='imageDivKuvat'>
                    <img className='kuva' src={kuvaData} onClick={delteImage}  alt='Kuva'/>
                </div>}

        </>

    );
}

export default Kuvat;













