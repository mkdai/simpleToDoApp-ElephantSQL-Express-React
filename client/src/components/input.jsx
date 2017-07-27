import React from 'react';

const input = (props) => (
    <form onSubmit={props.handleInputSubmit}>
        <input type="text" name="newToDo" onChange={props.handleInputChange}/>
    </form>
)

export default input;