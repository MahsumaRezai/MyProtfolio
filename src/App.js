import { Fragment } from "react";
import { Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Head from "./Componets/Head/Head";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";

function App(props) {
    return (
        <Fragment>
            <Head />
            <Route path='/HOME'>
                <Home />
            </Route>

            <Route path='/ABOUT'>
                <About />
            </Route>

            <Route path='/WROK'>
                <Work />
            </Route>

            <Route path='/CONTACT'>
                <Contact />
            </Route>

        </Fragment>
    )
}

export default App;
