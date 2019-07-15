import React, { useState, useEffect } from 'react';

import { withAppContext } from './MyContext';


const UserMessage = ({
  counter,
  ...otherProps
}) => {
  const [newCounter, setNewCounter] = useState(counter);

  useEffect(() => setNewCounter(counter), [counter]);

  return (
    <>
      Comp3 [{newCounter}] ({otherProps.context.state.openPricingModal ? 'Sim' : 'Nao'})
      <button onClick={() => otherProps.context.onOpenPricingModal()} type="button">Change3</button>
    </>
  );
}

export default withAppContext(UserMessage);



// import React, { useState, useEffect } from 'react';


// const Comp3 = ({
//   counter
// }, otherProps) => {
//   const [newCounter, setNewCounter] = useState(counter);

//   useEffect(() => setNewCounter(counter), [counter]);

//   console.log('otherProps', otherProps);

//   return (
//     <UserConsumer>
//       <input value={newCounter} onChange={e => setNewCounter(e.target.value)} />
//     </UserConsumer>
//   );
// };

// export default Comp3;
