import React from 'react';

import { withAppContext } from './MyContext';

import Comp3 from './Comp3';

const UserMessage = () => {
  return (
    <>
      <Comp3 />
    </>
  );
}

export default withAppContext(UserMessage);

// import React, { Component } from 'react';

// export default class src extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter2: this.props.counter
//     }
//   }

//   render() {
//     console.log('counter', this.props.counter);

//     return (
//       <>
//         {this.state.counter2}
//       </>
//     );
//   }
// }
