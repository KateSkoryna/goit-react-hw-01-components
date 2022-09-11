import styled from '@emotion/styled';

export const DescriptionStyle = styled.div`
  width: 100%;
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ImageBox = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid transparent;
`;

export const TextBoxTitle = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  color: #425366;
`;

export const TextBox = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #c4cad0;
  text-align: center;

  &:nth-of-type(even) {
    margin-bottom: 10px;
  }
`;
