import PropTypes from 'prop-types';
import {
  StatsList,
  StatsItems,
  StatsTextTitle,
  StatsText,
} from './Stats.styled';

// вариант через перебор обьекта

// export const Stats = ({ stats: data }) => {
//   const statsBlock = [];
//   for (let key in data) {
//     const text = (
//       <StatsItems key={key}>
//         <StatsTextTitle>{`${key} `}</StatsTextTitle>
//         <StatsText>{data[key]}</StatsText>
//       </StatsItems>
//     );
//     statsBlock.push(text);
//   }
//   return <StatsList>{statsBlock}</StatsList>;
// };

export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItems>
        <StatsTextTitle>Followers </StatsTextTitle>
        <StatsText>{followers}</StatsText>
      </StatsItems>
      <StatsItems>
        <StatsTextTitle>Views </StatsTextTitle>
        <StatsText>{views}</StatsText>
      </StatsItems>
      <StatsItems>
        <StatsTextTitle>Likes </StatsTextTitle>
        <StatsText>{likes}</StatsText>
      </StatsItems>
    </StatsList>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
