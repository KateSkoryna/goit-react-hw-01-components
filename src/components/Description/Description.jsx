import PropTypes from 'prop-types';
import {
  DescriptionStyle,
  ImageBox,
  TextBoxTitle,
  TextBox,
} from './Description.styled';

export const Description = ({ name, tag, location, avatar }) => {
  return (
    <DescriptionStyle>
      <ImageBox src={avatar} alt="User avatar" />
      <TextBoxTitle>{name}</TextBoxTitle>
      <TextBox>&#64;{tag}</TextBox>
      <TextBox>{location}</TextBox>
    </DescriptionStyle>
  );
};

Description.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
