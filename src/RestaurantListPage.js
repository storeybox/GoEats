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
        <div className="container">
            <button
                className="waves-effect waves-light btn-small"
                onClick={() => setShowNewRestaurantForm(true)}
                data-test="addRestaurantButton">
                Add Restaurant
                </button>
            {showNewRestaurantForm ? <NewRestaurantForm onSave={handleSave} /> : null}
            <ul className="collection with-header">
                <li className="collection-header"><h4>Restaurants</h4></li>
            {restaurantList.map((restaurant, index) => <li className="collection-item" key={index}>{restaurant}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantListPage;