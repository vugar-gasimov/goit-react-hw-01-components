import React from 'react';
import FriendListItem from './FriendListItem';
export const FriendList = ({ id, friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friendsItem => (
        <FriendListItem key={id} {...friendsItem} />
      ))}
    </ul>
  );
};
