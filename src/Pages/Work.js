import { Fragment } from "react";
import React from 'react'
import Action from "./Works/Action";
import classes from './Work.module.css'


const Work = (props) => {
    return (
        <Fragment>
            <div className={classes.warrp}>
                <Action />
            </div>
        </Fragment>
    )
}
export default Work;