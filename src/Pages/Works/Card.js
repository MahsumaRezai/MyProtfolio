import { Fragment } from 'react';
import React from 'react';
import classes from './Work.module.css';

const Card = (props) => {
    return (
        <Fragment>
            <div className={classes.card}>
                {props.children}

            </div>

        </Fragment>
    )
}
export default Card;