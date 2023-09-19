import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>{props.title}</h1>
            </header>
            <div className={classes.content}>
                <p>{props.massage}</p>
            </div>
            <footer className={classes.actions}>
            </footer>
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