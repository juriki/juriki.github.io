import Form from '../Form/Form';
import './HomaPage.css'



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
                    Remonttityöt kylpy­huoneeseen <br/>
                    tai koko huoneistoon
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
            <div className='RadiusImage'>ba
                <img src="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" id="1726990206" class="" data-dm-image-path="https://de.cdn-website.com/2d4ee8058f4c4f6db0c48bc6966c6004/dms3rep/multi/kaari-ala.svg" onerror="handleImageLoadError(this)"></img>
            </div>
            <div className='ImageLogo'>
                <div className='TextDiv'>
                        <h1> Текст Заглушка Генерируется случайным образом Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fugiat rerum perferendis totam fuga, cupiditate, id placeat similique impedit consequatur ut voluptatibus in incidunt eligendi quidem architecto omnis corporis dolorum!</h1>
                </div>
       
            </div>
            <div className='ImageLogoDiv'>
                <div>
                    <img className='ImageLogo1' src='RakennusjaValvonta.png' width={10} />
                </div>
            </div>
            <div className='FormDiv'>
                <img src='logopng.png'/>
                <Form />
            </div>
       
            
        </>


    );
}

export default HomePage;









