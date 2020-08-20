import React from 'react';

const Message = ({ message, setMessage }) => {

  return (
    <div>
      <h2>{message}</h2>
      <input onChange={(event) => setMessage(event.target.value)} />
    </div>
  );
};

export default Message;