import styled from '@emotion/styled';

export const TransactionSection = styled.section`
  width: 960px;
  margin-left: auto;
  margin-right: auto;
`;

export const Transactionstable = styled.table`
  width: 100%;
  font-size: 16px;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const TransactionstableHead = styled.thead`
  text-transform: uppercase;
  color: #fff;
  background-color: #55bdd6;
`;

export const TransactionstableRow = styled.tr`
  background-color: #fff;

  &:nth-of-type(even) {
    background-color: #ecf2f3;
  }
`;

export const TransactionstableData = styled.td`
  ${'' /* background-color: #fff; */}
  color: #868b91;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const TransactionstableHeadData = styled.th`
  padding-top: 20px;
  padding-bottom: 20px;
`;
