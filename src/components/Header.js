import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    let [loginButtonText, setloginButtonText] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg lg:bg-green-50">
            <div className="logo-container">
                <img
                    src= {LOGO_URL}
                    className="w-44 h-44"
                    alt="Logo"
                />
            </div>
            <div className="flex items-center">
                <ul className="flex  p-4 m-4"> 
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "❌"}
                    </li>
                    <li className="px-4">
                        <Link to='/'>
                        Home
                        </Link>
                    </li>
                    <li className="px-4">
                    <Link to='/about'>
                        About
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to='/contact'>
                        Contact Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to='/grocery'>
                        Grocery
                        </Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button 
                    className="px-4"
                    type="button"
                    cursor="pointer"
                    onClick={() => {
                        loginButtonText === 'Login'? setloginButtonText("Logout"): setloginButtonText("Login");
                    }}
                    >
                        {loginButtonText}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;