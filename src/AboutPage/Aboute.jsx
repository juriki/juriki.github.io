//import UncontrolledExample from '../Components/Carouselq';
import PriceList from '../PriceList/PriceList';
import './Aboute.css'
import React from 'react';



function Aboute() {
    const lattia = ["Vinyyli / Laminaatti", "Parketti ", "Muovimatto"]
    const lattiaHinta = [<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>]
    const lattiaText = "(Hinta koostuu pelkästään työn osuudesta, ilman purkua)"

    const vedeneristys = ["Alle 5 m2 ", "5-10 m2",]
    const vedeneristysHinta = [<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,]
    const vedeneristysText = "(Työ + Materiaalit) (Pinta-ala lattiasta katsottuna, valmiille pohjille)"

    const naopinnote = ["Alle 10 m2 ", "10-20 m2 "]
    const naopinnoteHinta = [<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,]
    const naopinnoteText = "(Työ + Materiaalit)(Pinta-ala lattiasta katsottuna)"


    const markatilavalvonta = ["Vedeneristystarkastus", "3 Käyntiä (alkukartoitus, vedeneristys ja lopputarkastus)", "Keittiöremontin valvonta", "Neuvonta 1h"]
    const markatilavalvontaHinta = [<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,]
    const markatilavalvontaText = ""

    const silikoninVaihto = ["Alle 5m2", "5-10 m2 "]
    const silikoninVaihtoHinta = [<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,]
    const silikoninVaihtoText = "(Työ + Materiaalit) (Pinta-ala lattiasta katsottuna)"


    const mikrosementti = ["Alle 5 m2 ", "5-10 m2 "]
    const mikrosementtiHinta = [<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,<a href='contacts'style={{color: 'black'}}>Kysy hinta</a>,]
    const mikrosementtiTekst = "(Työ + Materiaalit)(Pinta-ala lattiasta katsottuna)(Laattojen päälle) "
    return (
        <>
            <meta name='robots' content='index , follow' />
            <div style={{ paddingTop: "200px" }}>
                <PriceList palveluNimi="Lattia" otherText={lattiaText} tyot={lattia} hinta={lattiaHinta} />
                <PriceList palveluNimi="Märkätilatöiden valvonta" otherText={markatilavalvontaText} tyot={markatilavalvonta} hinta={markatilavalvontaHinta} />
                <PriceList palveluNimi="Nanopinnoite" otherText={naopinnoteText} tyot={naopinnote} hinta={naopinnoteHinta} />
                <PriceList palveluNimi="Vedeneristys" otherText={vedeneristysText} tyot={vedeneristys} hinta={vedeneristysHinta} />
                <PriceList palveluNimi="Silikonin vaihto" otherText={silikoninVaihtoText} tyot={silikoninVaihto} hinta={silikoninVaihtoHinta} />
                <PriceList palveluNimi="Mikrosementti" otherText={mikrosementtiTekst} tyot={mikrosementti} hinta={mikrosementtiHinta} />
            </div>


        </>

    );
}

export default Aboute;