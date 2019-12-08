import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;
  margin: 25px 0;
  .form-input {
    padding: 10px 0;
    width: 100%;
    background-color: transparent;
    border: none;
    color: var(--darkWhite);
    border-bottom: 1px solid rgba(255, 255, 255, .4);
    :focus ~ label {
      top: -7px;
      font-weight: 600;
      letter-spacing: var(--spacing);
      font-size: .7em;
      transition: var(--transition);
      color: ${({ err }) => err ? 'var(--red)' : 'var(--primary)'};
    }
  }
  label {
    position: absolute;
    top: 11px;
    left: 0;
    color: var(--darkWhite);
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    font-weight: 500;
    transition: var(--transition);
    z-index: -10;
    .shrink {
      top: -7px;
      padding: 2px 10px;
      font-weight: 600;
      letter-spacing: var(--spacing);
      left: 12px;
      font-size: .7em;
      color: ${({ err }) => err ? 'var(--red)' : 'var(--primary)'}
    }
  }

`

export default StyledInput;