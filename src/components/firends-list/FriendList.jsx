import React from 'react';
import { StyledFriendsList } from './friendsListStyled.Styled';
import FriendListItem from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <StyledFriendsList>
      {friends.map(friendsItem => (
        <FriendListItem key={friendsItem.id} {...friendsItem} />
      ))}
    </StyledFriendsList>
  );
};
