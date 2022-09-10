import PropTypes from 'prop-types';
import {
  FriendsListBox,
  FriendsListItems,
  FriendListImg,
  FriendListIcon,
  FriendListTitle,
} from './FriendsList.styled';

export const FriendList = ({ friends }) => {
  const friendsItems = friends.map(({ avatar, name, isOnline, id }) => (
    <FriendsListItems key={id}>
      <FriendListIcon status={isOnline} />
      <FriendListImg src={avatar} alt="User avatar" />
      <FriendListTitle>{name}</FriendListTitle>
    </FriendsListItems>
  ));

  return <FriendsListBox>{friendsItems}</FriendsListBox>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
