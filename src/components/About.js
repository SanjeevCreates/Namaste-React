import User from "./User";

import UserClass from "./UserClass";

import React from "react";


class About extends React.Component {
    render (){
        return (
            <div>
            <h1>About Class Component</h1>
            <h2>This is a Namaste React Web series</h2>
            <UserClass name={'Sanjeev Maddukuri (Class)'} location = {'Chennai Class'}/>
        </div>

        )
    }
}


export default About;