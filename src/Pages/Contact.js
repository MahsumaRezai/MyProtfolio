import { Fragment } from "react";
import React from 'react';
import classes from './Work.module.css';
import Contacts from './Contact/Contacts'


const Contact = (props) => {
    return (
        <Fragment>
            <div className={classes.contact}>
            <Contacts/>
            </div>
        </Fragment>
    )
}
export default Contact;