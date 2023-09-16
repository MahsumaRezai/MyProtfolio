import { Fragment } from "react";
import img from './image/profile.jpg';
import classes from './Pages.module.css';

const name = ["Masoumeh", "Developer & Designer", "mahsuma.rezai8@gmail"];


const Profile = (props) => {

    return (
        <Fragment>
            <div className={classes.profile}>
                <img src={img} alt="" className={classes.image} />

                <div className={classes.info}>
                    <p className={classes.name}>Name:{name[0]}</p>
                    <p className={classes.data}>Profile:{name[1]}</p>
                    <p className={classes.email}>Email:{name[2]}</p>
                </div>


            </div>

        </Fragment>
    )
}
export default Profile;