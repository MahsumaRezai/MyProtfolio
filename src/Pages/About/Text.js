import { Fragment } from "react";
import classes from './Pages.module.css';

const Text = (props) => {
    return (
        <Fragment>
            <div className={classes.text}>
                <h1 className={classes.title}>About Me</h1>
                <p className={classes.para}>Hello, my name is Masoumeh Rezai. I live in Herat, Afghanistan. I like <br></br>coding I have been
                   learning programming for two year.
                     During this <br></br> time,
                     I have worked on many projects in this sector and every day I try<br></br> to increase my abilities in this sector.</p>
            </div>
        </Fragment>
    )
}
export default Text;