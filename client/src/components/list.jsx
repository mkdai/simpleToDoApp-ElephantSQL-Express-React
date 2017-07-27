import React from 'react';
import Entry from './entry.jsx';

class List extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <Entry todo={todo} handleEntryClick={this.props.handleEntryClick}/>
                )}
            </ul>
        )
    }
};

export default List;