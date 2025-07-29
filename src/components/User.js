import { useState } from "react";

const User = (props)=> {
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(1);
    const {name} = props;
    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Chennai</h3>
            <h4>Sanjeevmaddukuri07@gmail.com</h4>
        </div>
    );
};

export default User;