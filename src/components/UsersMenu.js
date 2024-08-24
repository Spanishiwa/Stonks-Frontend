import React from 'react';
import { twMerge } from 'tailwind-merge';

const users = [
  {
    id: 'text1',
    username: 'HamzaGh3',
  },
  {
    id: 'text2',
    username: 'plusratio__',
  },
  {
    id: 'text3',
    username: 'DrizzleDunkzuser1',
  },
  {
    id: 'text4',
    username: 'NabzKabz',
  },
  {
    id: 'text5',
    username: 'userONE',
  },
  {
    id: 'text6',
    username: 'usertwo',
  },
  {
    id: 'text7',
    username: 'userThrEe',
  },
  {
    id: 'text8',
    username: 'userFour',
  },
  {
    id: 'text9',
    username: 'userXX',
  },
  {
    id: 'text10',
    username: 'userUltra',
  },
  {
    id: 'text11',
    username: 'Picard',
  },
  {
    id: 'text11',
    username: 'MasterChief',
  },
];

export const UsersMenu = ({ insertUsername, isOpen }) => {
  return (
    <div
      className={twMerge(
        'absolute top-[-170px] max-h-[170px] w-full max-w-[calc(100%-16px-46px)] flex-col overflow-auto rounded border border-solid border-primary bg-secondary p-2',
        isOpen ? 'flex' : 'hidden',
      )}
    >
      {users &&
        users.map(({ id, username }) => {
          return (
            <button
              className="flex py-1"
              key={id}
              type="button"
              value={username}
              onClick={() => insertUsername(username)}
            >
              {username}
            </button>
          );
        })}
    </div>
  );
};
