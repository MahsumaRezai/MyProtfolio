import React from 'react';
import classes from './Work.module.css';
import {Fragment} from 'react'
const Text = (props) => {
    return (
        <Fragment>
            <div className={classes.text}>
                <h1 className={classes.title}>PORTFOLIO</h1>
                <h2 className={classes.para}>My Projects</h2>
            </div>


        </Fragment>



    )

}
export default Text;