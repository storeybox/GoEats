import React, { useState } from "react";
import styled from "styled-components";
import NewRestaurantForm from "./NewRestaurantForm";

const RestaurantListPage = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

    const handleSave = (name) => {
        setShowNewRestaurantForm(false);
        setRestaurantList([...restaurantList, name]);
    }

    const renderRestaurantForm = () => {
        if (showNewRestaurantForm) {
            return (
                <ModalWrapper>
                    <ModalCard>
                    <CancelButton onClick={() => setShowNewRestaurantForm(false)}>Cancel</CancelButton>
                    <NewRestaurantForm onSave={handleSave} />
                    </ModalCard>
                    <Background onClick={() => setShowNewRestaurantForm(false)} />
                </ModalWrapper>
            );
        }
        return null;
    }
    return (
        <div className="container">
            <button
                className="waves-effect waves-light btn-small"
                onClick={() => setShowNewRestaurantForm(true)}
                data-test="addRestaurantButton">
                Add Restaurant
            </button>
            {renderRestaurantForm()}
            <ul className="collection with-header">
                <li className="collection-header"><h4>Restaurants</h4></li>
            {restaurantList.map((restaurant, index) => <li className="collection-item" key={index}>{restaurant}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantListPage;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding: 2em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  min-width: 480px;
  max-height: 100vh;
  overflow-y: auto;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.3;
`;