import styled from '@emotion/styled';

export const FedbackOptionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const FedbackOptionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${({ iconColor }) => {
    switch (iconColor) {
      case 'good':
        return 'green';
      case 'neutral':
        return '#F6BA6F';
      case 'bad':
        return 'orangered';
      default:
        break;
    }
  }};
  :hover {
    opacity: 0.45;
  }
`;
