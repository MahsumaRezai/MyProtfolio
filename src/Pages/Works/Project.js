import { Fragment } from 'react';
import classes from './Work.module.css';
import Card from './Card';
import img1 from './image/imgone.PNG';
import React from 'react';


const Project = (props) => {
    return (
        <Fragment>
            <div className={classes.parject}>
                <Card>
                    <div className={classes.warrper}>
                        <img src={img1} alt="" className={classes.imgone} />
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn}>Read More</button>
                    </div>

                </Card>

            </div>

        </Fragment>
    )
}
export default Project;