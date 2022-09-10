import styled from '@emotion/styled';

export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatsItems = styled.li`
  text-align: center;
`;

export const StatsTextTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #b6bfc8;
`;

export const StatsText = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #425366;
`;
