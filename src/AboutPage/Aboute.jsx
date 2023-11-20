//import UncontrolledExample from '../Components/Carousel';
import PriceList from '../PriceList/PriceList';
import './Aboute.css'
import React from 'react';



function Aboute() {
    const lattia = ["Vinyyli / Laminaatti", "Parketti ", "Muovimatto"]
    const lattiaHinta = ["20e / m2", "40e / m2 ", "25e / m2"]
    const lattiaText = "(Hinta koostuu pelkästään työn osuudesta, ilman purkua)" 

    const vedeneristys = ["Alle 5 m2 ", "5-10 m2",]
    const vedeneristysHinta = ["800e", "900e",]
    const vedeneristysText = "(Työ + Materiaalit) (Pinta-ala lattiasta katsottuna, valmiille pohjille)"

    const naopinnote =["Alle 10 m2 ","10-20 m2 "]
    const naopinnoteHinta =["600e","700e"]
    const naopinnoteText = "(Työ + Materiaalit)(Pinta-ala lattiasta katsottuna)"


    const markatilavalvonta = ["Vedeneristystarkastus","3 Käyntiä (alkukartoitus, vedeneristys ja lopputarkastus)","Keittiöremontin valvonta","Neuvonta 1h"]
    const markatilavalvontaHinta = ["300e","600e","250e","180e"]
    const markatilavalvontaText  = ""

    const silikoninVaihto = ["Alle 5m2","5-10 m2 "]
    const silikoninVaihtoHinta = ["300e","350e"]
    const silikoninVaihtoText = "(Työ + Materiaalit) (Pinta-ala lattiasta katsottuna)"


    const mikrosementti = ["Alle 5 m2 ","5-10 m2 "]
    const mikrosementtiHinta = ["4500e","5500e"]
    const mikrosementtiTekst = "(Työ + Materiaalit)(Pinta-ala lattiasta katsottuna)(Laattojen päälle) "
    return (
        <>
            <div style={{paddingTop: "200px"}}>
                <PriceList palveluNimi="Lattia" otherText={lattiaText}  tyot={lattia} hinta={lattiaHinta}/>
                <PriceList palveluNimi="VEDENERISTYS" otherText={vedeneristysText} tyot={vedeneristys} hinta={vedeneristysHinta}/>
                <PriceList palveluNimi="NANOPINNOITE" otherText={naopinnoteText} tyot={naopinnote} hinta={naopinnoteHinta}/>
                <PriceList palveluNimi="MÄRKÄTILATÖIDEN VALVONTA" otherText={markatilavalvontaText} tyot={markatilavalvonta} hinta={markatilavalvontaHinta}/>
                <PriceList palveluNimi="SILIKONIN VAIHTO" otherText={silikoninVaihtoText} tyot={silikoninVaihto} hinta={silikoninVaihtoHinta}/>
                <PriceList palveluNimi="MIKROSEMENTTI" otherText={mikrosementtiTekst} tyot={mikrosementti} hinta={mikrosementtiHinta}/>
            </div>


        </>

    );
}

export default Aboute;