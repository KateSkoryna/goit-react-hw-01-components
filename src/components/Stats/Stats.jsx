import PropTypes from 'prop-types';

export const Stats = ({ stats: data }) => {
  const statsBlock = [];
  for (let key in data) {
    const text = (
      <li key={key}>
        <span className="label">{`${key} `}</span>
        <span className="quantity">{data[key]}</span>
      </li>
    );
    statsBlock.push(text);
  }
  return <ul className="stats">{statsBlock}</ul>;
};

Stats.propTypes = PropTypes.shape.isRequired;
