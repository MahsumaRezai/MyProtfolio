import { Fragment } from "react";
import { Link } from 'react-router-dom';

import React from 'react'


const HeadProdome = (props) => {
    return (
        <Fragment>
            <div >
                <div>
                    <ul>
                        <li><Link to='/prodome' className='info' >Read More</Link></li>
                    </ul>

                </div>



            </div>

        </Fragment>
    )
}
export default HeadProdome