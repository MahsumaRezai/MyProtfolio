import { Fragment } from 'react';
import classes from './Work.module.css';
import Card from './Card';
import React from 'react';
import img1 from './image/facbook.PNG';
import img2 from './image/sunglass.png';
import img3 from './image/netflix.PNG';




const ProjectFour = (props) => {
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
                <Card>
                    <div className={classes.warrper}>
                        <img src={img2} alt="" className={classes.imgone} />
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn}>Read More</button>
                    </div>

                </Card>
                <Card>
                    <div className={classes.warrper}>
                        <img src={img3} alt="" className={classes.imgone} />
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn}>Read More</button>
                    </div>

                </Card>

            </div>

        </Fragment>
    )
}
export default ProjectFour;