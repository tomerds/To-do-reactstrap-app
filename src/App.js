import './App.css';

import React from 'react';

import List from './components/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: []
    };
  };


  render() {
    return (
      <div className="App">
        <List toDo={this.state.toDo} />
      </div>
    )
  }
}

export default App;
