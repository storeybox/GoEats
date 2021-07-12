import React, { useState } from "react";

const NewRestaurantForm = ({ onSave }) => {
// add more
    const [inputText, setInputText] = useState("");

    return (
        <div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                data-test="newRestaurantName" />
            <button
                data-test="saveNewRestaurantButton"
                onClick={() => onSave(inputText)}
            >
                Save
                </button>
        </div>
    )
}

export default NewRestaurantForm;