import { Fragment } from "react";
import classes from './Pages.module.css';


const Skills = (props) => {
    return (
        <Fragment>
            <div className={classes.skills}>
                <div className={classes.titles}>
                    <h1>MY Skills</h1>
                </div>
                <div className={classes.progress}>
                    <span> HTML<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span>CSS<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span> SASS<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span> JAVASCRIPT<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span> REACT<span>100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span> NODE<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span> NEXT<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>
                <div className={classes.progress}>
                    <span> STYPESCRIPT<span> 100%</span></span>
                    <div className={classes.back}>

                    </div>
                </div>









            </div>
        </Fragment>
    )
}
export default Skills;