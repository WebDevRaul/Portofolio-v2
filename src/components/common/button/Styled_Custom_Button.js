import styled from 'styled-components';

const StyledCustomButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    color: var(--lightWhite);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    display: flex;
    :hover {
      transition: var(--transition);
      color: var(--secondary);
    }
  }
`

export default StyledCustomButton;