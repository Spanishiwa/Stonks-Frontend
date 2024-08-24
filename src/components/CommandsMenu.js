import React from 'react';

import InputMenuItem from '/src/components/InputMenuItem';

const commands = [
  {
    description: 'Block a user from interacting with you on Twitch',
    method: '/block',
    parameter: 'username',
  },
  {
    description: 'Remove user from your block list',
    method: '/unblock',
    parameter: 'username',
  },
  {
    description: 'Change your username color, i.e. blue, green, etc.',
    method: '/color',
    parameter: 'color',
  },
  {
    description: 'Gift a specified number of Subs to the community.',
    method: '/gift',
    parameter: 'quantity',
  },
  {
    description: 'Get detailed information on using a chat command',
    method: '/help',
    parameter: 'command',
  },
  {
    description: 'Display a list of moderators for this channel',
    method: '/mods',
    parameter: null,
  },
  {
    description: 'Display a list of VIPs for this channel',
    method: '/vips',
    parameter: null,
  },
  {
    description: 'Vote in the active poll on the given channel.',
    method: '/vote',
    parameter: 'index',
  },
];

const CommandsMenu = ({ onClick }) => {
  return (
    <>
      {commands &&
        commands.map(({ description, method, parameter }) => {
          return (
            <InputMenuItem key={method} onClick={onClick}>
              <div className="text-left">
                <p className="text-timestamp text-sm">
                  {method}
                  {parameter && ` [${parameter}]`}
                </p>
                <p className="text-xs text-primary">{description}</p>
              </div>
            </InputMenuItem>
          );
        })}
    </>
  );
};

export default CommandsMenu;
