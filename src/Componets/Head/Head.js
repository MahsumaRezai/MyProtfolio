import { Fragment } from "react";
import { Link } from 'react-router-dom';
import classes from './Head.module.css';
import Content from "./Content";
import React from 'react'


const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
                <div className={classes.lists} >
                    <ul className={classes.list}>
                        <li><Link to='/HOME' className={classes.link}>HOME</Link></li>
                        <li><Link to='/ABOUT' className={classes.link}>ABOUT</Link></li>
                        <li><Link to='/WORK' className={classes.link}>WORKS</Link></li>
                        <li><Link to='/CONTACT' className={classes.link}>CONTACT</Link></li>
                    </ul>
                    <div className={classes.text}>
                        <h1>My protfolio</h1>
                    </div>

                </div>
                <Content />



            </div>

        </Fragment>
    )
}
export default Head