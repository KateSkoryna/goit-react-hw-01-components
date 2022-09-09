import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  const statsItems = stats.map(({ id, label, percentage }) => (
    <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}&#x25;</span>
    </li>
  ));

  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}
      <ul className="stat-list">{statsItems}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
