import React from "react";
import '../../main.css';

import Header from '../components/Header';
import TodoItem from '../components/TodoItem/TodoItem';
import TodoForm from '../containers/TodoForm';



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      editingItemId: null
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: JSON.parse(localStorage.getItem('items')) || []
    }, () => {
      localStorage.setItem('items', JSON.stringify(this.state.items));
    });
  }

  handleAdd(event) {
    event.preventDefault();
    const input = event.target.getElementsByClassName('form__input')[0];
    const text = input.value;
    const newItems = [
        ...this.state.items,
        {id: Math.random(), text}
    ];
    this.setState({
        items: newItems
    })
    localStorage.setItem('items', JSON.stringify(newItems));
    input.value = ''
}

  handleRemove(id) {
    this.setState((state) => {
      const { items } = state;
      const newItems = items.filter(item => item.id !== id);
      localStorage.setItem('items', JSON.stringify(newItems));
      return {
        items: newItems,
      }
    })
  }
  
  handleEdit(id, newText) {
    this.setState((prevState) => {
      const { items } = prevState;
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      });
      localStorage.setItem('items', JSON.stringify(updatedItems)); 
      return {
        items: updatedItems,
      };
    });
  }

  render() {
    const {items, editingItemId } = this.state;
    return (
        <div className="container">
            <Header/>
            <TodoForm handleAdd={this.handleAdd}/>
            <div>
                {items.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        handleEdit={this.handleEdit}
                        handleRemove={this.handleRemove}
                        editing={editingItemId === item.id}
                    />
                ))}
            </div>
        </div>
    );
}
}


