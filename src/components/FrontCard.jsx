import React from 'react';

const FrontCard = ({ character, onClick }) => {
    return (
        <div className="FrontCard" onClick={onClick}>
            <h2>{character}</h2>
        </div>
    );
};

export default FrontCard;