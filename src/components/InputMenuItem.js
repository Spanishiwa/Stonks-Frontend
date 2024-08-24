import React from 'react';

const InputMenuItem = ({
  children,
  onClick = () => {
    console.error('error: InputMenuItem has no onClick');
  },
}) => {
  return (
    <button className="flex py-1" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default InputMenuItem;
