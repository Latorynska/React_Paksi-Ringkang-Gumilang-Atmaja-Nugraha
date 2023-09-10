import BootstrapLogo from '../assets/bootstrap-logo.svg.svg';

const Banner = () => {
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
                    <h1>Create Product</h1>
                    <h3 className="text-secondary">
                        Below is an example form built entirely with Bootstrap’s form
                        controls. Each required form group has a validation state that can
                        be triggered by attempting to submit the form without completing it.
                    </h3>
                </article>
            </section>
        </>
     );
}
 
export default Banner ;