import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import InputForm from './Input';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: props.toDo,
      item: ''
    }
  }

  updateHolder = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitItem = event => {
    event.preventDefault();

    const newObj = {
      item: this.state.item,
      completed: false
    }

    this.setState({
      toDo: [...this.state.toDo, newObj],
      item: ''
    })
  }



  render() {
    const toDoList = this.state.toDo.map(e => <ListGroupItem>{e.item}</ListGroupItem>)
    return (
      <div className="list-container">
        <ListGroup>
          {toDoList}
        </ListGroup>
        <InputForm value={this.state.item} updateNewToDo={this.updateHolder} submit={this.submitItem} />
      </div>
    )
  }
}

export default List;