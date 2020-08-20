import React, { useState } from 'react';
import Message from './Message';
import Limit from './Limit';

const App = () => {
  const [message, setMessage] = useState('Hello, world!');
  const [count, setCount] = useState(0);
  const [limit, setLimit]=useState(20)

  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>Increment </button>
      <button onClick={()=>setCount(count-1)}> Decrement </button>
      <Message message={message} setMessage={setMessage} />
      <Limit limit={limit} setLimit={setLimit}/>
    </div>
  );
};

export default App;
