import React, { useState } from "react";

const NewRestaurantForm = ({ onSave }) => {
// add more
    const [inputText, setInputText] = useState("");

    return (
        <div className="row">
            <div className="input-field col s12 m10">

            <input
                id="RestaurantName"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                    data-test="newRestaurantName" />
                <label htmlFor="RestaurantName">Restaurant Name</label>
            </div>
            <button
                className="waves-effect waves-light btn-small"
                data-test="saveNewRestaurantButton"
                onClick={() => onSave(inputText)}
            >
                Save
                </button>
        </div>
    )
}

export default NewRestaurantForm;