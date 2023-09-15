import { Fragment } from "react";
import classes from './Pages.module.css';
import Profile from "./Profile";

const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
            <Profile/>




            </div>
        </Fragment>
    )
}
export default About;