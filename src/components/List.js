import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

import InputForm from './Input';

const DivWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  `;

const Header = styled.h1`
  font: helvetica;
  font-size: 40px;
  font-align: center;
`;

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
      <DivWrapper>
        <Header>To Do App</Header>
        <ListGroup>
          {toDoList}
        </ListGroup>
        <InputForm value={this.state.item} updateNewToDo={this.updateHolder} submit={this.submitItem} />
      </DivWrapper>
    )
  }
}

export default List;