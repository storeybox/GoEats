import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";

const RestaurantListPage = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const handleSave = (name) => {
        setRestaurantList([...restaurantList, name])
    }

    return (
        <div>
            <button
                data-test="addRestaurantButton">
                Add Restaurant
                </button>
            <NewRestaurantForm onSave={handleSave} />
            {restaurantList.map((restaurant, index) => <p key={index}>{restaurant}</p>)}
        </div>
    )
}

export default RestaurantListPage;