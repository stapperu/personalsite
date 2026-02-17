import {Outlet} from "react-router";


const mainLayout = () => {
    return ( 
        <>

        <section className="max-w-7xl mx-auto px-6 my-8">
            <Outlet />
        </section>
        </>
     );
}
 

export default mainLayout;