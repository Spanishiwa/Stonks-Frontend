import React from 'react';

const TwitchChat = () => {
  return (
    <>
      <p className="align-center border-primary h-[50px] content-center border-b-[1px] px-2 text-center">
        STREAM CHAT
      </p>
      <div className="flex-auto p-2">
        <p>chat messages go here</p>
        <p>chat messages go here</p>
        <p>chat messages go here</p>
        <p>chat messages go here</p>
        <p>chat messages go here</p>
        <p>chat messages go here</p>
      </div>
      <div className="h-[90px] px-2 pb-2">
        <input type="text" />
      </div>
    </>
  );
};

export default TwitchChat;
