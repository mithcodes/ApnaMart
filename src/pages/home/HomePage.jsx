import { useContext } from "react";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import myContext from "../../context/myContext";

const HomePage = () => {

    const context=useContext(myContext)
    const name=context;
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
    
        </Layout>
    );
}

export default HomePage;