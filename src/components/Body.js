import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from 'react';
import Shimmer  from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log(listOfRestaurants);
    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
    
         setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
// Conditionally Rendering the Shimmer component if the listOfRestaurants array is empty

// If the listOfRestaurants array is not empty, then we are rendering the list of restaurants using the map function
 const onlineStatus = useOnlineStatus();
 if(onlineStatus===false) return <h1> You are Offline, Check Your Internet Connection🚀</h1> 
    return listOfRestaurants.length === 0 ? <Shimmer /> :(
        <div className="body">
            <div className="flex">
            <div className="m-4 p-4">
                <input 
                type="text" 
                placeholder="Search for Restaurants" 
                className="border border-solid border-black p-2 rounded-lg"
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value)}}
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick = { ()=>{
                    const filterdList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredRestaurants(filterdList);
                }}
                >
                    Search 
                </button>
            </div>
            <div className="m-4 p-4 flex items-center">
            <button 
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick = {() => {
                const filterdList = filteredRestaurants.filter((res) => res.info.avgRating > 4.5);
                setfilteredRestaurants(filterdList);
            }}
            >
                Top Rated Restaurants
            </button>
            </div>
            </div>
            <div className="flex flex-wrap">
               {filteredRestaurants.map((restaurant) =>(
                <Link
                  key={restaurant.info.id} 
                  to={'/restaurants/'+restaurant.info.id}
                >
                    <RestaurantCard  resData={restaurant} />
                </Link>
               ))}
            </div>
        </div>
    );
};

export default Body;
