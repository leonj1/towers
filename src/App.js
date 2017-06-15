import React, { Component } from 'react';
import './App.css';
import Column from './Column';
import { INCREASE, DECREASE } from './redux/actionTypes';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Column
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          length={this.props.store.getState()[0]}
          onSetHeight={this.handleSetHeight}
        />
      </div>
    );
  }

  handleAdd = () => {
    console.log(`add`);
    this.props.store.dispatch({ type: INCREASE });
  }

  handleDelete = () => {
    console.log(`delete`);
    this.props.store.dispatch({ type: DECREASE });
  }

}

export default App;