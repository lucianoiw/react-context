import React, { Component } from 'react';

import AppProvider from './MyContext';

import Comp1 from './Comp1';

class App extends Component {
  render() {
    return (
      <>
        <AppProvider>
          <Comp1 />
        </AppProvider>
      </>
    )
  }
}

export default App;
