import React from 'react';
import List from './list.jsx';
import Input from './input.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
        this.getEntries = this.getEntries.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEntryClick = this.handleEntryClick.bind(this);
        this.state = {
            list_id: 1,
            todos: [],
            inputVal: ''
        }
    }
    componentDidMount() {
        this.getEntries();
    }
    getEntries() {
        axios.get('/api/entry/fetchEntry')
        .then(response => {
            //console.log(response);
            this.setState({
                todos: response.data
            });
        })
    }
    handleInputSubmit(event) {
        event.preventDefault();
        axios.post('/api/entry/createEntry', {
            todo: this.state.inputVal,
            list_id: this.state.list_id
        }).then( ()=> {
            this.getEntries();
        });
    }
    handleInputChange(event) {
        this.setState({
            inputVal: event.target.value
        })
    }
    handleEntryClick(entry_id){
        axios.put('/api/entry/toggleEntryFinished',{
            id: entry_id})
        .then( () => this.getEntries());
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <div>
                        <h1>TODOS:</h1>
                    </div>
                    <div>
                        <List todos={this.state.todos} handleEntryClick={this.handleEntryClick} />
                    </div>
                    <div>
                        <Input handleInputSubmit={this.handleInputSubmit} handleInputChange={this.handleInputChange} />
                    </div>
                </div>
            </div>
        )
    }
};

export default App;