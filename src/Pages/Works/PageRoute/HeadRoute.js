import { Fragment } from "react";
import { Link } from 'react-router-dom';

import React from 'react'


const HeadRoute = (props) => {
    return (
        <Fragment>
            <div >
                <div >
                    <ul >
                        <li><Link to='/info' className='info' >Read More</Link></li>
                    </ul>

                </div>



            </div>

        </Fragment>
    )
}
export default HeadRoute