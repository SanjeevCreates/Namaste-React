import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {name,cuisines,costForTwo,cloudinaryImageId,avgRating} = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
            <img
                className="rounded-lg h-52 w-64"
                src={CDN_URL + cloudinaryImageId}
                alt="Restaurant Logo"
            />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>  {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4> {resData.info.sla.deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;