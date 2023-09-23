import HeroImage from '../../assets/hero-png.png';

const Hero = () => {
    return ( 
        <>
            <section id="hero">
                <div className="hero-content">
                    <div className="hero-text">
                    <div className="hero-title">Better Solutions For Your Business</div>
                    <div className="hero-description">
                        We are team of talented designers making websites with Bootstrap
                    </div>
                    <div className="hero-navigate">
                        <a href="#">
                        <button className="hero-btn">Get Started</button>
                        </a>
                        <a href="#">
                            <button className="hero-btn secondary">Watch Video</button>
                        </a>
                    </div>
                    </div>
                    <div className="hero-image">
                    <img src={HeroImage} alt="hero-img" />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Hero;