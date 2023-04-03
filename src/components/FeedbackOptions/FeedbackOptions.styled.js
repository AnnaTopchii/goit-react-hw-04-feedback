import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-weight: 700;
  background-color: #e6f2ff;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid #e6f2ff;
  padding: 20px;
  text-transform: uppercase;
  margin-left: auto;
  transition: background-color 250ms linear, border 250ms linear;
  &:hover,
  &:focus {
    background-color: #b3d7ff;
    border: 1px solid #004080;
  }
`;
