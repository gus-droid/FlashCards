import React from 'react';

const BackCard = ({ answer, onClick, image }) => {
    return (
        <div className="BackCard" onClick={onClick}>
            <h2>{answer}</h2>
            <img src = {image} className="Back-image"/>
        </div>
    );
};

export default BackCard;