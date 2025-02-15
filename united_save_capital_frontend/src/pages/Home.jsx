import Billing from "../components/home/Billing";
import Business from "../components/home/Business";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import styles from "../style";

const Home = ()=>{
    const submit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const res = await fetch("http://127.0.0.1/blogger/index.php", {
            method: "POST",
            body: formData,  // Do NOT set 'Content-Type', fetch will do it for us
        });

        const data = await res.json();
        console.log(data);
    };
    return(
        <>
            <div className={`bg-primary `}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    CardDeal
                    Testimonials
                    Clients
                    CTA
                    Footer
                </div>
            </div>
        </>
    )
};

export default Home;