import { Fragment } from "react";
import { Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Head from "./Componets/Head/Head";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import React  from 'react'

function App(props) {
    return (
        <Fragment>
            <Head />
            <Route path='/' exact>
                <Home />
            </Route>

            <Route path='/ABOUT'>
                <About />
            </Route>

            <Route path='/WORK'>
                <Work />
            </Route>

            <Route path='/CONTACT'>
                <Contact />
            </Route>

        </Fragment>
    )
}

export default App;
