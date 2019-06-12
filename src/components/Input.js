import React from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';


const InputForm = (props) => {
  return (
    <InputGroup>
      <Input
        placeholder='New To Do'
        value={props.value}
        onChange={props.updateNewToDo}
        name='item'
      />
      <InputGroupAddon addonType="append"><Button onClick={props.submit}>Add To Do</Button></InputGroupAddon>
    </InputGroup>
  )
}

export default InputForm;