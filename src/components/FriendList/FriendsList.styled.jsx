import styled from '@emotion/styled';

export const FriendsListBox = styled.ul`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
`;

export const FriendsListItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const FriendListIcon = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
  margin-right: 10px;
`;

export const FriendListImg = styled.img`
  width: 48px;
  margin-right: 10px;
`;

export const FriendListTitle = styled.p`
  font-size: 24px;
`;
