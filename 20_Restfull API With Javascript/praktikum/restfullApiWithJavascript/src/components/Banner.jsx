import { useSelector } from 'react-redux';
import BootstrapLogo from '../assets/bootstrap-logo.svg.svg';

const Banner = () => {
    const article = useSelector(state => state.articles);
    const language = useSelector(state => state.language);
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