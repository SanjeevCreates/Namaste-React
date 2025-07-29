import React from "react";
import { json } from "react-router";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: 'Dummy_Name',
                location: 'Dummy_Location',
                avatar_url: 'Dummy_Avatar'
            }
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/SanjeevCreates');
        const jsonData = await data.json();
        this.setState({
            userInfo:jsonData
        })
        console.log(jsonData);
        }
    render(){
        const {name,location, avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">
            <img src={avatar_url} alt="Avatar" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Sanjeevmaddukuri07@gmail.com</h4>
        </div> 
        )
    }
}

export default UserClass;