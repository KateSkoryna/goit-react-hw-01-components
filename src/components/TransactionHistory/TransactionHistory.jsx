import PropTypes from 'prop-types';

import {
  TransactionSection,
  Transactionstable,
  TransactionstableHead,
  TransactionstableRow,
  TransactionstableData,
  TransactionstableHeadData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const transactionsRows = items.map(({ id, type, amount, currency }) => (
    <TransactionstableRow key={id}>
      <TransactionstableData>{type}</TransactionstableData>
      <TransactionstableData>{amount}</TransactionstableData>
      <TransactionstableData>{currency}</TransactionstableData>
    </TransactionstableRow>
  ));

  return (
    <TransactionSection>
      <Transactionstable>
        <TransactionstableHead>
          <tr>
            <TransactionstableHeadData>Type</TransactionstableHeadData>
            <TransactionstableHeadData>Amount</TransactionstableHeadData>
            <TransactionstableHeadData>Currency</TransactionstableHeadData>
          </tr>
        </TransactionstableHead>

        <tbody>{transactionsRows}</tbody>
      </Transactionstable>
    </TransactionSection>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
