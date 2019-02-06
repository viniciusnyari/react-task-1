import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Name: {props.name}</p>
            <p>Some text here again</p>
        </div>
    )
};

export default userOutput;