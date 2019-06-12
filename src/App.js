import './App.css';

import React from 'react';

import List from './components/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: [
        {
          item: 'Create a react-strap app',
          completed: false
        },
        {
          item: 'Eat lunch',
          completed: false
        }
      ]
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
