import React from 'react';
import { twMerge } from 'tailwind-merge';

const InputMenu = ({ children, isOpen }) => {
  return (
    <div
      className={twMerge(
        'absolute top-[-170px] max-h-[170px] w-full max-w-[calc(100%-16px-46px)] flex-col overflow-auto rounded border border-solid border-primary bg-secondary p-2',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      {children}
    </div>
  );
};

export default InputMenu;
