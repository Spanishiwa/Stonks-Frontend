import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import CommandsMenu from '/src/components/CommandsMenu';
import InputMenu from '/src/components/InputMenu';
import UsersMenu from '/src/components/UsersMenu';

const messages = [
  {
    color: 'text-blueViolet',
    id: 'text1',
    text: 'FALCONS LETSGOOO FALCONS LETSGOOO',
    username: 'HamzaGh3',
  },
  {
    color: 'text-dodgerBlue',
    id: 'text2',
    text: 'BOOOOOOOOOOOOO',
    username: 'plusratio__',
  },
  {
    color: 'text-green',
    id: 'text3',
    text: 'this is so hype',
    username: 'DrizzleDunkzuser1',
  },
  {
    color: 'text-firebrick',
    id: 'text4',
    text: 'HYYYYYYYPPEEEEEE',
    username: 'NabzKabz',
  },
  {
    color: 'text-dodgerBlue',
    id: 'text5',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    username: 'userONE',
  },
  {
    color: 'text-blueViolet',
    id: 'text6',
    text: 'Fusce sit amet dapibus ligula eu ullamcorper lectus.',
    username: 'usertwo',
  },
  {
    color: 'text-firebrick',
    id: 'text7',
    text: 'Praesent accumsan at urna vitae pretium.',
    username: 'userThrEe',
  },
  {
    color: 'text-green',
    id: 'text8',
    text: 'In tincidunt finibus purus id condimentum.',
    username: 'userFour',
  },
  {
    color: 'text-firebrick',
    id: 'text9',
    text: 'Zombie ipsum reversus ab viral inferno.',
    username: 'userXX',
  },
  {
    color: 'text-dodgerBlue',
    id: 'text10',
    text: 'nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.',
    username: 'userUltra',
  },
  {
    color: 'text-blueViolet',
    id: 'text11',
    text: 'Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris',
    username: 'Picard',
  },
  {
    color: 'text-green',
    id: 'text11',
    text: 'Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner.',
    username: 'MasterChief',
  },
];

const ChatMessage = ({ color, text, username }) => {
  return (
    <p className="px-5 py-[5px] text-sm">
      <span className="text-timestamp mr-[5px] text-sm">11:42</span>
      <span className={twMerge('text-sm', color)}>{username}: </span>
      {text}
    </p>
  );
};

const TwitchChat = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState(() => messages);
  const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(false);
  const [isCommandsMenuOpen, setIsCommandsMenuOpen] = useState(false);

  const handleCloseCommandsMenu = () => {
    setIsCommandsMenuOpen(() => false);
  };

  const handleChange = (e) => {
    setChatInput(() => e.target.value);

    const shouldShowCommands =
      e.target.value.length === 1 && e.target.value.includes('/');

    const shouldShowUsers = e.target.value?.slice(-1)?.includes('@');

    if (shouldShowUsers) {
      setIsUsersMenuOpen(() => true);
    }

    if (isUsersMenuOpen && e.target.value.length === 0) {
      setIsUsersMenuOpen(() => false);
    }

    if (shouldShowCommands) {
      setIsCommandsMenuOpen(() => true);
    }

    if (isCommandsMenuOpen && e.target.value.length === 0) {
      handleCloseCommandsMenu();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      insertChat();
    }
  };

  const insertUsername = (username) => {
    setChatInput((prev) => prev + username);
    setIsUsersMenuOpen(() => false);
  };

  const resetChat = () => {
    setIsUsersMenuOpen(() => false);
    handleCloseCommandsMenu();
    setChatInput(() => '');
  };

  const insertChat = () => {
    if (chatInput) {
      const newChatMessage = {
        color: 'text-dodgerBlue',
        id: 'urUserId',
        text: chatInput,
        username: 'urUsername',
      };

      setChatMessages((prev) => [...prev, newChatMessage]);

      resetChat();
    }
  };

  return (
    <>
      <p className="align-center h-[50px] content-center border-b border-primary px-2 text-center">
        STREAM CHAT
      </p>
      <div className="flex-auto overflow-auto pb-2">
        <p className="px-5 py-[5px] text-sm text-status">
          Welcome to the chat room!
        </p>
        {chatMessages &&
          chatMessages.map(({ color, id, text, username }) => {
            return (
              <ChatMessage
                color={color}
                key={id}
                text={text}
                username={username}
              />
            );
          })}
      </div>
      <div className="relative flex h-[90px] flex-col px-2 pb-2">
        <InputMenu isOpen={isCommandsMenuOpen || isUsersMenuOpen}>
          {isCommandsMenuOpen && (
            <CommandsMenu onClick={handleCloseCommandsMenu} />
          )}
          {isUsersMenuOpen && <UsersMenu insertUsername={insertUsername} />}
        </InputMenu>
        <div className="flex h-[40px] items-center rounded border border-solid border-primary bg-secondary px-2">
          <input
            className="bg-transparent max-h-[40px] flex-auto py-2 outline-none"
            type="text"
            value={chatInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="ml-2 w-[30px] rounded-full border border-solid border-[#fff]">
            {String.fromCodePoint('0x1F609')}
          </button>
        </div>
        <div className="mt-2 flex-auto text-right">
          <button
            className="bg-buttonPrimary rounded px-2 py-1 font-medium"
            type="button"
            onClick={insertChat}
          >
            Chat
          </button>
        </div>
      </div>
    </>
  );
};

export default TwitchChat;
