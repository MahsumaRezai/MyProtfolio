import { Fragment, useState } from 'react';
import classes from './Work.module.css';
import Card from './Card';
import React from 'react';
import ErrorModal from './UIP1/ErrorModal';
import img1 from './image/imgone.PNG';
import img2 from './image/imgTwo.png';
import img3 from './image/food.png';






const Project = (props) => {
    const [CartOne, setCartOne] = useState(false);

    const imgHandler = () => {
        setCartOne(true)
    }
    const imgHandlerClose = () => {
        setCartOne(false)
    }



    return (
        <Fragment>
            <div className={classes.parject}>

                <Card>
                    <div className={classes.warrper}>
                        <img src={img1} alt="" className={classes.imgone} />
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn} onClick={imgHandler}>Read More</button>
                    </div>
                    {CartOne && <ErrorModal onconfirm={imgHandlerClose} />}


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
export default Project;