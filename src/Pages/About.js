import { Fragment } from "react";
import classes from '../Pages/About/Pages.module.css';
import Profile from "./About/Profile";
import Text from './About/Text'
import Skills from "./About/Skill";
import React from 'react';

const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <Profile />
                <Text />
                <Skills />




            </div>
        </Fragment>
    )
}
export default About;
