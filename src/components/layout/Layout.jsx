/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="main-content min-h-screen mt-10">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;