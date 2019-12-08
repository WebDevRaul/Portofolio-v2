import styled from 'styled-components';

const StyledTextarea = styled.div`
  position: relative;
  margin: 25px 0;
  .area {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, .4);
    border-radius: var(--border);
    overflow-y: hidden;
    resize: none;
    transition: var(--transition);
    background-color: transparent;
    color: var(--lightDark);
    /* :focus {
      outline: none !important;
      box-shadow: none !important;
    } */
    :focus ~ .label {
      top: -9px;
      left: 10px;
      background-color: var(--grey);
      border-radius: var(--border);
      padding: 5px 10px;
      font-weight: 600;
      letter-spacing: var(--spacing);
      font-size: .6em;
      transition: var(--transition);
      color: ${({ err }) => err ? 'var(--red)' : 'var(--primary)'};
      z-index: 10;
    }
  }
  .label {
    position: absolute;
    top: 11px;
    left: 10px;
    color: var(--darkWhite);
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    font-weight: 500;
    font-size: .9em;
    transition: var(--transition);
    z-index: -10;
  }
  .shrink {
    position: absolute;
    top: -9px;
    left: 10px;
    background-color: var(--grey);
    border-radius: var(--border);
    padding: 5px 10px;
    font-weight: 600;
    letter-spacing: var(--spacing);
    font-size: .6em;
    transition: var(--transition);
    color: ${({ err }) => err ? 'var(--red)' : 'var(--primary)'};
    z-index: 10;
  }
  .badge {
    position: absolute;
    right: 5px;
    top: -13px;
    padding: 5px 8px 4px 8px;
    margin: 5px;
    background: var(--grey);
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: var(--border);
    color: var(--primary);
  }
  .over {
    color: var(--red);
  }
  .validate {
    border-color: var(--red);
  }
`

export default StyledTextarea;