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
                        {language === 'ID' ? article.title.id : article.title.en}
                    </h1>
                    <h3 className="text-secondary">{language === 'ID' ? article.description.id : article.description.en}</h3>
                </article>
            </section>
        </>
     );
}
 
export default Banner ;