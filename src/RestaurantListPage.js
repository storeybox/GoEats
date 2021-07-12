import React, { useState } from "react";
import NewRestaurantForm from "./NewRestaurantForm";

const RestaurantListPage = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

    const handleSave = (name) => {
        setShowNewRestaurantForm(false);
        setRestaurantList([...restaurantList, name]);
    }

    return (
        <div>
            <button
                onClick={() => setShowNewRestaurantForm(true)}
                data-test="addRestaurantButton">
                Add Restaurant
                </button>
            {showNewRestaurantForm ? <NewRestaurantForm onSave={handleSave} /> : null }
            {restaurantList.map((restaurant, index) => <p key={index}>{restaurant}</p>)}
        </div>
    )
}

export default RestaurantListPage;