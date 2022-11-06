import styled from 'styled-components';

export const StyledProgressList = styled.div`
  position: absolute;
  z-index: 11;
  top: 80px;
  left: 40px;
  display: flex;
  flex-direction: column;
  width: 120px;
  gap: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.btnColor.default};
  border: 1px solid ${(props) => props.theme.border.button};
  border-radius: 10px;
`;

export const StyledProgress = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.bgColor.default};
  }
`;
