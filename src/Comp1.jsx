import React, { Component } from 'react';

import Comp2 from './Comp2';
import Comp3 from './Comp3';

export default class src extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <button type="button" onClick={() => this.setState(prevState => ({ counter: prevState.counter + 1}))}>{this.state.counter}</button>
        <Comp2 counter={this.state.counter} />
        <Comp3 counter={this.state.counter} />
      </>
    );
  }
}
