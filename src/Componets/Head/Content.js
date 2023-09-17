import { Fragment } from "react";
import classes from './Head.module.css';
import React  from 'react'


const Content = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div>
                    <h1>I am Masoumeh Rezai</h1>
                </div>
                <div className={classes.title}>
                    <h3>Developer  & </h3>
                    <h3>Designer</h3>
                </div>

            </div>


        </Fragment>
    )
}
export default Content;