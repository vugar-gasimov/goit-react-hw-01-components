import React from 'react';
import {
  StyledFriendsItem,
  StyledStatus,
  StyledAvatar,
  StyledName,
} from './friendsListStyled.Styled';
const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const status = isOnline ? 'online' : 'offline';
  return (
    <StyledFriendsItem data-id={id}>
      <StyledStatus className={`status ${status}`}></StyledStatus>
      <StyledAvatar src={avatar} alt="User avatar" width="48" />
      <StyledName>{name}</StyledName>
    </StyledFriendsItem>
  );
};
export default FriendListItem;
