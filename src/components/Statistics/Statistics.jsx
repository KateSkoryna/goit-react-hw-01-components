import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsTitle,
  StatisticsList,
  StatisticItems,
  StatisticsTitleText,
  StatisticsText,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const statsItems = stats.map(({ id, label, percentage }) => (
    <StatisticItems key={id}>
      <StatisticsTitleText>{label}</StatisticsTitleText>
      <StatisticsText>{percentage}&#x25;</StatisticsText>
    </StatisticItems>
  ));

  return (
    <StatisticsBox>
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : ''}
      <StatisticsList>{statsItems}</StatisticsList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
