const NewsLetter = () => {
    return ( 
        <>
            <section id="newsletter">
                <div className="newsletter-container">
                    <p className="newsletter-title">Join Our Newsletter</p>
                    <p className="newsletter-subtitle">
                    Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                    </p>
                    <div className="newsletter-mailing">
                    <form action="">
                        <input
                        type="email"
                        size={70}
                        className="newsletter-input"
                        required=""
                        />
                        <button className="hero-btn newsletter-btn">Subscribe</button>
                    </form>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default NewsLetter;