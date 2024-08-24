import React from 'react';

import InputMenuItem from '/src/components/InputMenuItem';

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

const UsersMenu = ({ insertUsername }) => {
  return (
    <>
      {users &&
        users.map(({ id, username }) => {
          return (
            <InputMenuItem key={id} onClick={() => insertUsername(username)}>
              {username}
            </InputMenuItem>
          );
        })}
    </>
  );
};

export default UsersMenu;
