import { Fragment } from "react";
import classes from './Pages.module.css';
import Profile from "./Profile";
import Text from './Text'

const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <Profile />
                <Text />




            </div>
        </Fragment>
    )
}
export default About;