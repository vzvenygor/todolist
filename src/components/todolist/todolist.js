import React from 'react';
import './todolist.css';

class Todolist extends React.Component {
  constructor() {
    super()
      this.state = {
        name: 'Enter task',
        list: [],
        newItem: null
      }

    this.todoList = this.todoList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.getItem = this.getItem.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }

  todoList() {
    return this.state.list.map((item) => {
    return <p className='items'>{item}</p>          
    })
  }

  addItem() {
    if (this.state.newItem) {
      const newList = this.state.list;
      newList.unshift(this.state.newItem)
      this.setState({
      list: newList,
      newItem: null
      })
    }
  }

  getItem(e) {
    this.setState({
    newItem: e.target.value
    })
  }

  setDefault(e) {
    e.target.value = ''
  }

  render() {
    return (
      <div className='list'>
        <div>
          <input
            autoFocus
            placeholder={this.state.name}
            onChange={this.getItem}
            onBlur={this.setDefault}
            className='input'
          />
          <button className='button' onClick={this.addItem}>Add</button>
        </div>
        <div>
          {this.todoList()}
        </div>
      </div>
    );
  }
}

export default Todolist;