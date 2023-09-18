import BootstrapLogo from '../assets/bootstrap-logo.svg.svg';

const Banner = ({ language, article }) => {
    return ( 
        <>
            <section className="pt-lg-5 text-center">
                <figure>
                    <img
                        src={BootstrapLogo}
                        className="mx-auto d-block"
                        alt="..."
                    />
                </figure>
                <article>
                    <h1>
                        {article.title[language]}
                    </h1>
                    <h3 className="text-secondary">{article.description[language]}</h3>
                </article>
            </section>
        </>
     );
}
 
export default Banner ;