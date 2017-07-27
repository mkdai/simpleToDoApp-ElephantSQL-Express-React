import React from 'react';

class Entry extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        
        let style = this.props.todo.finished ? {
            textDecoration: 'line-through'
        } : {
            textDecoration: 'none' 
        }
        return (
            <li style={style} onClick={()=>this.props.handleEntryClick(this.props.todo.id)}>
                {this.props.todo.todo}
            </li>
        )
    }
};

export default Entry;