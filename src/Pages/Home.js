import { Fragment } from "react";
import About from "./About";
import Work from "./Work";

const Home = (props) => {
    return (
        <Fragment>
            <About />
            <Work />
        </Fragment>
    )
}
export default Home;