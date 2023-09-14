import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import limaVideo from '../../assets/Lima-front.mp4';
import limaVideoWebM from '../../assets/Lima-front.webm';
import limaMobileVideo from '../../assets/Lima-Restaurant.mp4';
import limaMobileVideoWebM from '../../assets/Lima-Restaurant.webm';
import limaImage from '../../assets/interior - no ppl_1.webp'
import './Header.css';


const Header = () => {
    function handleClick() {
        window.location.href = "/reservations"
    }
    const [isSlowConnection, setIsSlowConnection] = useState(false);

    useEffect(() => {
        // Create a small test image
        const testImage = new Image();
        testImage.src = limaImage;

        // Measure loading time
        const startTime = performance.now();
        testImage.onload = () => {
            const endTime = performance.now();
            const loadTime = endTime - startTime;
            if (loadTime > 5000) {
                setIsSlowConnection(true);
            }
        };
    }, []);

    return (
        <div className="app__header app__wrapper section__padding-2" id="home">
            {/* <Helmet>
                    <title>Lima Restaurant - Nikkei</title>
                    <meta name='description' content='Peruvain Japanese Fusion Restaurant in Dawes Point, Sydney' />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content='Lima Restaurant - Nikkei' />
                    <meta property="og:description" content='Peruvain Japanese Fusion Restaurant in Dawes Point, Sydney' />
                    <meta property="og:image" content="%PUBLIC_URL%/favicon.ico?v=2" />
                    <meta property="og:url" content="https://limarestaurant.com.au/#home" />
                </Helmet> */}
            <div className="app__wrapper_img">
                {isSlowConnection ? (
                    <img src={limaImage} alt="header img" className="header__img" />
                ) : (
                    window.innerWidth > 650 ? (
                        <video className="header__video" autoPlay loop muted playsInline preload="auto" width="1920" height="1080">
                            <source src={limaVideo} type="video/mp4" />
                            <source src={limaVideoWebM} type="video/webm" />
                        </video>
                        // <img src={limaImage} alt="header img" className="header__img" />
                    ) : (
                        <video className="header__video" autoPlay loop muted playsInline preload="auto">
                            <source src={limaMobileVideo} type="video/mp4" />
                            <source src={limaMobileVideoWebM} type="video/webm" />
                        </video>
                        // <img src={limaImage} alt="header img" className="header__img" />
                    )
                )}
            </div>

            <div className='app__wrapper_info-2'>
                <h1 className="app__header-h1">A unique fusion experience <br></br> starts here</h1>
                <h1 className="p__heebo-p">
                    Discover the best of Peruvian - Japanese cuisine <br></br> in an electric atmosphere and <br></br>  vibrant space.
                </h1>
                <button type="button" className="custom__button_mobile book_table" onClick={handleClick}>BOOK TABLE</button>

            </div>
        </div>
    );
}
export default Header;
