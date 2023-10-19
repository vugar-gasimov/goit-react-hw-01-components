import styled from 'styled-components';

export const StyledFriendsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
`;

export const StyledFriendsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;

  &.online {
    background-color: #c8e6c9;
  }

  &:hover {
    background-color: #e6f7e7;
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const StyledStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;

  &.online {
    background-color: #4caf50;
  }

  &.offline {
    background-color: #f44336;
  }
`;

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
