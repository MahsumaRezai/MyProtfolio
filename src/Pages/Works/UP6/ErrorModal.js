import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
import img from '../image/music.png'
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <div className={classes.head}>
                <h1>Project information</h1>
            </div>
            <div className={classes.content}>
                <div className={classes.images}>
                    <img src={img} alt="" className={classes.img} />
                    <p className={classes.text}>Project Name: Music Online shop</p>
                    <a className={classes.link} href="https://github.com/MahsumaRezai/Music
">Github Link: https://github.com/MahsumaRezai/Music
</a>

                </div>
            </div>

        </Card>
    )
}
const ErroModal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay title={props.title} massage={props.massage} onconfirm={props.onconfirm} />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;