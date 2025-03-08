import React from 'react';

const Button = ({ ButtonName, OnClick }) => {
    return (
        <button className="Button" onClick={OnClick}>
            {ButtonName}
        </button>
    );
};

export default Button;
