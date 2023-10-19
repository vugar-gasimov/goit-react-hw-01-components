import React from 'react';
const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const status = isOnline ? 'online' : 'offline';
  return (
    <li className="item" data-id={id}>
      <span className={`status ${status}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
export default FriendListItem;
