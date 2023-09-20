import { Fragment, useState } from 'react';
import classes from './Work.module.css';
import Card from './Card';
import React from 'react';
import ErrorModal from './UIP1/ErrorModal';
import ErrorModalTwo from './UIP2/ErrorModalTwo';
import ErrorModalThree from './UIP3/ErrorModalThree'
import img1 from './image/imgone.PNG';
import img2 from './image/imgTwo.png';
import img3 from './image/food.png';

const Project = (props) => {
    const [CartOne, setCartOne] = useState(false);
    const [CartTwo, setCartTwo] = useState(false);
    const [CartThree, setCartThree] = useState(false);


    const imgHandler = () => {
        setCartOne(true)
    }
    const imgHandlerClose = () => {
        setCartOne(false)
    }
    const imgHandlerTwo = () => {
        setCartTwo(true)
    }
    const imgHandlerCloseTwo = () => {
        setCartTwo(false)
    }

    const imgHandlerThree = () => {
        setCartThree(true)
    }
    const imgHandlerCloseThree = () => {
        setCartThree(false)
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
                        <button className={classes.btn} onClick={imgHandlerTwo}>Read More</button>
                    </div>

                    {CartTwo && < ErrorModalTwo onconfirm={imgHandlerCloseTwo} />}
                </Card>
                <Card>
                    <div className={classes.warrper}>
                        <img src={img3} alt="" className={classes.imgone} />
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn} onClick={imgHandlerThree}>Read More</button>
                    </div>
                    {CartThree && <ErrorModalThree onconfirm={imgHandlerCloseThree} />}

                </Card>

            </div>

        </Fragment>
    )
}
export default Project;