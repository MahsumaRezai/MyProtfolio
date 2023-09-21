import { Fragment } from "react";
import React from 'react';
import classes from './Contact.module.css'
import img1 from './image/github.png';
import img2 from './image/twitter.png';
import img3 from './image/gmail.png';
import img4 from './image/link.png';

const Contacts = (props) => {
    return (
        <Fragment>
            <div className={classes.contact} >
                <div className={classes.warrp}>
                    <h2 className={classes.maintitle}>Get in Touch</h2>
                    <div>
                        <p className={classes.title}>If you want to follow me, you can follow me from the following networks</p>
                    </div>
                    <div className={classes.image}>
                        <a href="https://github.com/MahsumaRezai">
                            <img src={img1} alt="" className={classes.img} />
                        </a>
                        <a href='https://twitter.com/MahsumaRezai'>
                            <img src={img2} alt="" className={classes.img} />
                        </a>
                        <a href="mahsuma.rezai8@gmail.com">
                            <img src={img3} alt="" className={classes.img} />

                        </a>
                        <a href="https://www.linkedin.com/in/masoumeh-rezai-99826a262/">
                            <img src={img4} alt="" className={classes.img} />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Contacts;