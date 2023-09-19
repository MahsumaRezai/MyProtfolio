import { Fragment } from "react";
import React from 'react';
import Text from './Text'
import Project from "./Project";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
const Action = (props) => {
    return (
        <Fragment>
            <div>
                <Text />
                <Project />
                <ProjectTwo />
                <ProjectThree />



            </div>

        </Fragment>
    )
}
export default Action;