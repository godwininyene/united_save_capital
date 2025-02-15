import { Outlet } from "react-router-dom";
import styles from "../style";
import Navbar from "../components/Navbar";
const BaseLayout = ()=>{

    return(
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
            
            <main >
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default BaseLayout;