import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
                    className="logo"
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const resObj = [
      {
        "info": {
          "id": "10576",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
          "locality": "6th Block",
          "areaName": "Koramangala",
          "costForTwo": "₹350 for two",
          "cuisines": ["Pizzas"],
          "totalRestaurants": 20
        },
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "21K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 0.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-30 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          },
        },
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.6",
            "ratingCount": "3.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      {
        "info": {
          "id": "5934",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
          "locality": "Koramangala",
          "areaName": "Koramangala",
          "costForTwo": "₹350 for two",
          "cuisines": ["Burgers", "American"]
        },
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "100K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-30 06:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "4.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },

      {
        "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
        ],
        "avgRating": 4.5,
        "parentId": "371281",
        "avgRatingString": "4.5",
        "totalRatingsString": "55K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.5",
        "ratingCount": "4.6K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "671928",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
        "locality": "7th Block",
        "areaName": "Koramangla",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.8K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "588791",
        "name": "Goila Butter Chicken",
        "cloudinaryImageId": "5e19832da032dd69547565e27104706f",
        "locality": "CLUB ROAD",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
        "North Indian",
        "Biryani",
        "Kebabs",
        "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "322587",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.8K+",
        "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "newg.png",
        "description": "Gourmet"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Gourmet",
        "imageId": "newg.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.2",
        "ratingCount": "107"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/goila-butter-chicken-club-road-koramangala-rest588791",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "643665",
        "name": "WeFit - Protein Bowls, Salads & Sandwiches",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/1d7bd5cc-1ab3-4eb4-9978-4a316df2d992_643665.JPG",
        "locality": "Patel Narayana Reddy Layout",
        "areaName": "Ejipura",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Healthy Food",
        "Salads",
        "Keto",
        "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "355285",
        "avgRatingString": "4.6",
        "totalRatingsString": "516",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "brand",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "brand"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-patel-narayana-reddy-layout-ejipura-rest643665",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "750225",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
        "locality": "6TH BLOCK",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "444382",
        "avgRatingString": "4.4",
        "totalRatingsString": "559",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-6th-block-koramangala-rest750225",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "681439",
        "name": "LeanCrust Pizza- ThinCrust Experts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
        "locality": "6TH BLOCK",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "11216",
        "avgRatingString": "4.6",
        "totalRatingsString": "416",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-6th-block-koramangala-rest681439",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "622030",
        "name": "MOJO Pizza - 2X Toppings",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/aa5a8dc4-5b73-4dfc-86d6-edc0f1855f54_622030.jpg",
        "locality": "Patel Narayana Reddy Layout",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Fast Food",
        "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "11329",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.0K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-patel-narayana-reddy-layout-koramangala-rest622030",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "717421",
        "name": "Paris Panini - Gourmet Sandwiches & Wraps",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/1b14de7e-7efc-4eaa-aa07-95f1ab50dc58_717421 (1).jpg",
        "locality": "BTM Layout",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Continental",
        "Pastas",
        "Salads",
        "Desserts",
        "Snacks",
        "Fast Food",
        "French"
        ],
        "avgRating": 4.6,
        "parentId": "21019",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.3K+",
        "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-btm-layout-koramangala-rest717421",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "23678",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "63K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:55:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Burger.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Burger.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "534235",
        "name": "Cheesecake & Co.",
        "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Bakery"
        ],
        "avgRating": 4.6,
        "parentId": "387417",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.0K+",
        "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 00:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "newg.png",
        "description": "Gourmet"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Gourmet",
        "imageId": "newg.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.3",
        "ratingCount": "115"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "656392",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
        "locality": "1st Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.3K+",
        "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 03:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "10820",
        "name": "California Burrito",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "1252",
        "avgRatingString": "4.6",
        "totalRatingsString": "41K+",
        "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "2.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/california-burrito-koramangala-rest10820",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "11211",
        "name": "Taco Bell",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/95cca2be-d63c-4c0c-9014-10ecb27e31f6_11211.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Mexican",
        "Fast Food",
        "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "1557",
        "avgRatingString": "4.4",
        "totalRatingsString": "25K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "5.8K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/taco-bell-koramangala-rest11211",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "426776",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/d512978b-3dde-48b9-a974-ca7be403eef1_426776.jpg",
        "locality": "7th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Desserts",
        "Bakery",
        "Beverages"
        ],
        "avgRating": 4.7,
        "parentId": "1040",
        "avgRatingString": "4.7",
        "totalRatingsString": "5.7K+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 23:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Desserts.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Desserts.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "18973",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
        ],
        "avgRating": 4.4,
        "parentId": "2120",
        "avgRatingString": "4.4",
        "totalRatingsString": "38K+",
        "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-30 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Andhra.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Andhra.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "8.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "158855",
        "name": "Candice's Gourmet Sandwiches & Wraps",
        "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
        "Salads",
        "sandwich",
        "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "465403",
        "avgRatingString": "4.6",
        "totalRatingsString": "4.0K+",
        "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 0.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "newg.png",
        "description": "Gourmet"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Gourmet",
        "imageId": "newg.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "596862",
        "name": "Moplah's",
        "cloudinaryImageId": "bc9fbf67eb01738aed2a6cfb061ada89",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹800 for two",
        "cuisines": [
        "Kerala",
        "Biryani",
        "Seafood",
        "Beverages",
        "Ice Cream",
        "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "356891",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.3K+",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "newg.png",
        "description": "Gourmet"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Gourmet",
        "imageId": "newg.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/moplahs-5th-block-koramangala-rest596862",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "430368",
        "name": "Kebapci",
        "cloudinaryImageId": "82cee87165a12942080a2df5a3b46fb9",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
        "Turkish",
        "Middle Eastern",
        "Lebanese"
        ],
        "avgRating": 4.4,
        "parentId": "17445",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.4K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-01-29 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "newg.png",
        "description": "Gourmet"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "bolt!",
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
        }
        },
        {
        "attributes": {
        "description": "Gourmet",
        "imageId": "newg.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "4.1K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
        "context": "seo-data-2b032f4d-bd36-44e5-8451-a19a687fa3f7"
        },
        "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kebapci-koramangala-rest430368",
        "type": "WEBLINK"
        }
        }
        ]
  



const RestaurantCard = (props) => {
    const { resData } = props;

    const {name,cuisines,costForTwo,cloudinaryImageId,parentId} = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                alt="Restaurant Logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resObj.map((restaurant) => <RestaurantCard key={resObj.info.id} resData={restaurant} />)
                }
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
