import PropTypes from 'prop-types';

export const Description = ({ name, tag, location, avatar }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
