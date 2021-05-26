import React, { Component } from 'react';

export class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            items: [{id: 1, value: "comprar huevos", checked: false}, 
            {id: 2, value: "comprar leche", checked: false}]
        }
        this.changeValue = this.changeValue.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    changeValue(e) {
        this.setState({newItem: e.target.value})
    }

    addItem(e) {
        e.preventDefault();
        const items = this.state.items;
        const toDo = {
            id: items.length + 1,
            value: this.state.newItem,
            checked: false
        }
        items.push(toDo);
        this.setState({items: items})
    }

    render() { 
        return ( 
            <div>
                <form>
                    <input type="text" placeholder="Add a to-do"
                    onChange={this.changeValue}></input>
                    <button onClick={this.addItem}>Add</button>
                </form>
                <p>{this.state.newItem}</p>
                <ul id="todo-board">
                    {this.state.items.map(item => <li key={item.id}>{item.value} | {item.checked.toString()}</li>)}
                </ul>
            </div>
        );
    }
}
 