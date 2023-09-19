import { Fragment } from 'react';
import classes from './Work.module.css';
import Card from './Card';
import React from 'react';
import img1 from './image/imgone.PNG';
import img2 from './image/imgTwo.png';
import img3 from './image/food.png';
import { Route } from 'react-router-dom';
import Daitls from './PageRoute/Dailts';
import HeadRoute from './PageRoute/HeadRoute';
import Prodome from './PageRoute/Prodome';
import HeadProdome from './PageRoute/HeadProdome';




const Project = (props) => {
    return (
        <Fragment>
            <div className={classes.parject}>

                <Card>
                    <div className={classes.warrper}>
                        <img src={img1} alt="" className={classes.imgone} />
                    </div>
                    <div>
                        <Route path="/info">
                            <Daitls />

                        </Route>
                    </div>
                    <HeadRoute />


                </Card>
                <Card>
                    <div className={classes.warrper}>
                        <img src={img2} alt="" className={classes.imgone} />
                    </div>
                    <div>
                        <Route path="/prodome">
                            <Prodome />
                        </Route>
                    </div>
                    <HeadProdome />

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
export default Project;