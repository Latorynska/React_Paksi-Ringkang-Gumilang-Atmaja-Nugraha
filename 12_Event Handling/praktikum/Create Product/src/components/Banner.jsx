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
                        {language === 'id' ? article.title.id : article.language.en}
                    </h1>
                    <h3 className="text-secondary">{language === 'id' ? article.description.id : article.description.en}</h3>
                </article>
            </section>
        </>
     );
}
 
export default Banner ;