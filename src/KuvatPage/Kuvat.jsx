//import UncontrolledExample from '../Components/Carousel';
//import PriceList from '../PriceList/PriceList';
//import './KuvaGalleria.css'
import Galleri from '../Gallery/Gallery';

function Kuvat() {

    const kylppari = [ "/newImaiges/kyllpySauna1.png","/newImaiges/kyllpySauna2.png","/newImaiges/kyllpySauna3.png","/newImaiges/kyllpySauna4.png",] 
    const toiletSuhkku = ["/newImaiges/toiletSuhku1.png","/newImaiges/toiletSuhku2.png","/newImaiges/toiletSuhku3.png","/newImaiges/toiletSuhku4.png",]
    const keittio = ["/newImaiges/ketio1.png","/newImaiges/ketio2.png","/newImaiges/ketio3.png","/newImaiges/ketio4.png","/newImaiges/ketio5.png",]
    const bedRoom =["/newImaiges/bed2Room1.png","/newImaiges/bed2Room2.png","/newImaiges/bedRoom1.png","/newImaiges/bedRoom2.png",]
    const stairs = ["/newImaiges/stairs1.png","/newImaiges/stairs2.png",]
    const huoseOut = ["/newImaiges/HousOutDoor1.png","/newImaiges/HousOutDoor2.jpg","/newImaiges/HousOutDoor3.png",]
    const terassi = ["/newImaiges/terassa1.png","/newImaiges/terassa2.png",]
    const katto = ["/newImaiges/katto1.png","/newImaiges/katto2.png",]
    const smalHouse = ["/newImaiges/smallHouse1.png","/newImaiges/smallHouse2.png"]


    return (
        <>
           
            <h1 style={{paddingTop:"100px"}}>
  
            </h1>
           <Galleri kuvat={kylppari} tyoNimi={'Kylppyhuone'}/> 
           <Galleri kuvat={toiletSuhkku} tyoNimi={'Suihku'}/> 
           <Galleri kuvat={keittio}  tyoNimi={'Keitiö'}/> 
           <Galleri kuvat={bedRoom}  tyoNimi={'Makuhuone'}/> 
           <Galleri kuvat={stairs}  tyoNimi={'Portatiden saneraus'}/> 
           <Galleri kuvat={huoseOut}  tyoNimi={'Julkisivut'}/> 
           <Galleri kuvat={katto}  tyoNimi={'Kattoremontti'}/> 
           <Galleri kuvat={terassi}  tyoNimi={'Terassi'} /> 
           <Galleri kuvat={smalHouse}  tyoNimi={'Pien Rakennus'} /> 
        </>

    );
}

export default Kuvat;













