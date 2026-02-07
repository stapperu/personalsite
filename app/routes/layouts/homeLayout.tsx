import {Outlet} from "react-router";
import HeroBanner from "../../components/HeroBanner";

const homeLayout = () => {
    return ( 
        <>
            <HeroBanner />
        <section className="max-w-6xl mx-auto px-6 my-8">
            <Outlet />
        </section>
        </>
     );
}
 

export default homeLayout;