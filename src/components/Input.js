import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import styled from 'styled-components';

const GreenButton = styled(Button)`
  background-color: #8CDD81;
  color: white;
`;

const InputForm = (props) => {
  return (
    <InputGroup>
      <Input
        placeholder='New To Do'
        value={props.value}
        onChange={props.updateNewToDo}
        name='item'
      />
      <InputGroupAddon addonType="append"><GreenButton onClick={props.submit}>Add To Do</GreenButton></InputGroupAddon>
    </InputGroup>
  )
}

export default InputForm;