import { Fragment } from "react";
import React from 'react';
import classes from './Contact.module.css'
import Cart from "./Cart";


const Contacts = (props) => {
    return (
        <Fragment>
            <div className={classes.contact} >
                <Cart>
                    <div>
                        <div>
                            <p>If you want to follow me, you can follow me from the following networks</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </Cart>


            </div>
        </Fragment>
    )
}
export default Contacts;