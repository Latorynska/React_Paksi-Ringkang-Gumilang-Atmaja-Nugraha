import Contact from "../components/LandingPage/Contact";
import Hero from "../components/LandingPage/Hero";
import NewsLetter from "../components/LandingPage/NewsLetter";

const LandingPage = () => {
    return ( 
        <>
            <main>
                <Hero />
                <NewsLetter />
                <Contact />
            </main>
        </>
     );
}
 
export default LandingPage;