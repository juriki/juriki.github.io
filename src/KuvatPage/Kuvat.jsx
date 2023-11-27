//import UncontrolledExample from '../Components/Carousel';
//import PriceList from '../PriceList/PriceList';
//import './KuvaGalleria.css'
import React from 'react';
import Galleri from '../Gallery/Gallery';

function Kuvat() {
    
    const kuvat = ["/newImaiges/kuvaVlad1.png", "/newImaiges/kuvaVlad2.png", "/newImaiges/kuvaVlad3.png", "/newImaiges/kuvaVlad4.png", "/newImaiges/kuvaVlad5.png", "/newImaiges/kuvaVlad6.png", "/newImaiges/kuvaVlad7.png", "/newImaiges/kuvaVlad8.png", "/newImaiges/kuvaVlad9.png", "/newImaiges/kuvaVlad10.png", "/newImaiges/kuvaVlad11.png", "/newImaiges/kuvaVlad12.png", "/newImaiges/kuvaVlad13.png", "/newImaiges/kuvaVlad14.png", "/newImaiges/kuvaVlad15.png", "/newImaiges/kuvaVlad16.png",
        "/newImaiges/kuvaVlad17.png", "/newImaiges/kuvaVlad18.png", "/newImaiges/kuvaVlad19.png", "/newImaiges/kuvaVlad20.png", "/newImaiges/kuvaVlad21.png", "/newImaiges/kuvaVlad22.png"]

        
    const kuvat2 = ["vladPict2.png", "vladPict10.png", "vladPict11.png", "vladPict4.png", "vladPict3.png", "vladPict1.png", "vladPict7.png", "vladPict8.png", "vladPict9.png", "vladPict5.png", "vladPict6.png"]


    return (
        <>
           
            <h1 style={{paddingTop:"100px"}}>
  
            </h1>
            <Galleri kuvat={kuvat}/>
            <Galleri kuvat={kuvat2}/>
        </>

    );
}

export default Kuvat;













