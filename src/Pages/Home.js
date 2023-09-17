import { Fragment } from "react";
import About from "./About";
import Work from "./Work";
import React  from 'react';

const Home = (props) => {
    return (
        <Fragment>
            <About />
            <Work />
        </Fragment>
    )
}
export default Home;