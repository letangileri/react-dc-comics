import img1 from '../assets/img/buy-comics-digital-comics.png';
import img2 from '../assets/img/buy-comics-merchandise.png';
import img3 from '../assets/img/buy-comics-shop-locator.png';
import img4 from '../assets/img/buy-comics-subscriptions.png';
import img5 from '../assets/img/buy-dc-power-visa.svg';

export default function AppBanner(){

    return(
        <>
        <section className="banner-bg">
            <div className='container banner-container'>
                <div className='img-banner'>
                    <img src={img1} alt="" />
                    <p>ciao</p>
                </div>
                <div className='img-banner'>
                    <img src={img2} alt="" />
                    <p>ciao</p>
                </div>
                <div className='img-banner'>
                    <img src={img3} alt="" />
                    <p>ciao</p>
                </div>
                <div className='img-banner'>
                    <img src={img4} alt="" />
                    <p>ciao</p>
                </div>
                <div className='img-banner'>
                    <img src={img5} alt="" />
                    <p>ciao</p>
                </div>
            </div>
        </section>
        </>
    )
}