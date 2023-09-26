import base from "/assets/parallax/base.png";
import mid from "/assets/parallax/mid.png";
import front from "/assets/parallax/front.png";
import david from "/assets/david.jpg";
import {useLayoutEffect} from "react";
import gsap from "gsap-trial";
import {ScrollSmoother} from "gsap-trial/dist/ScrollSmoother";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollSmoother.create({wrapper: '.scroll__wrapper', content: '.scroll__content', effects: true});
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className='page-hero'>
                <div className='layers'>
                    <div data-speed=".8" className="layer layer__base"
                         style={{backgroundImage: `url(${base})`}}></div>
                    <div data-speed=".9" className="layer layer__mid"
                         style={{backgroundImage: `url(${mid})`}}></div>
                    <div className='content'>
                        <h2 className="hero__title main__title">The Digital Museum of Artworks</h2>
                    </div>
                    <div className="layer layer__front"
                         style={{backgroundImage: `url(${front})`}}></div>
                    <div className='content'><p className='hero__text'>by Karl Bryullov</p></div>
                </div>
            </section>
            <section className='home__block-1'>
                <section className='home__block-1__wrapper'>
                    <h2 className="second__title dark">We can’t wait to share our museum with you.</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="164" viewBox="0 0 65 164" fill="none">
                        <path
                            d="M19.7953 3.37085e-05C35.3102 8.56577 47.0382 20.6307 54.9793 36.1947C62.9202 51.7587 65.784 68.328 63.5705 85.9027C61.9511 98.7605 57.6638 110.55 50.7085 121.272C43.7533 131.993 34.7963 140.761 23.8375 147.575L55.622 151.578L54.0601 163.98L6.2282e-05 157.171L6.80877 103.111L19.2106 104.673L14.9471 138.525C24.9388 132.805 33.1122 125.215 39.4673 115.753C45.8224 106.292 49.7195 95.8472 51.1587 84.4203C52.9356 70.3116 50.8454 56.8977 44.8881 44.1786C38.9308 31.4595 29.9985 21.2435 18.0912 13.5306L19.7953 3.37085e-05Z"
                            fill="#1C1B1F"/>
                    </svg>
                </section>
            </section>
            <section className='home__block-2'>
                <section className='content'>
                    <h2 className="second__title">Unlock the Canvas of Imagination: Dive into a World of Artistry.</h2>
                    <button className='main__button' onClick={() => navigate('artworks')}>
                        <p>Explore artworks</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M1.17949 13.0667L0 12.0445L11.1154 2.40173H1.01008V0.93335H14V12.1913H12.3057V3.43338L1.17949 13.0667Z"/>
                        </svg>
                    </button>
                    <img src={david} alt=""/>
                </section>
                <div className='home__block-2__circle'></div>
            </section>
        </>
    );
};

export default Home;
