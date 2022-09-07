import PropTypes from 'prop-types';
import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <Description
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul>
        <Stats stats={stats} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
