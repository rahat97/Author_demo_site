import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Banner3></Banner3>
            <Banner2></Banner2>
            <Banner4></Banner4>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;