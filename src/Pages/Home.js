import { Fragment } from "react";
import About from "./About";
import Work from "./Work";
import React from 'react';
import Contact from "./Contact";

const Home = (props) => {
    return (
        <Fragment>
            <About />
            <Work />
            <Contact />
        </Fragment>
    )
}
export default Home;