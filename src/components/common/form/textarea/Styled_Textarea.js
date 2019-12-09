import styled from 'styled-components';

const StyledTextarea = styled.div`
  position: relative;
  margin: 25px 0;
  padding: 0 10px;
  .area {
    width: 100%;
    padding: 10px;
    border: 1px solid;
    border-color: ${({ val, err }) => err ? 'var(--red)' : val ? 'var(--primary)' : 'rgba(255, 255, 255, .4)'};
    border-radius: var(--border);
    overflow-y: hidden;
    resize: none;
    transition: var(--transition);
    background-color: transparent;
    color: var(--lightDark);
    :focus {
      border-color: var(--primary);
    }
    :focus ~ .label {
      top: -9px;
      left: 20px;
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
    top: 14px;
    left: 20px;
    color: var(--darkWhite);
    letter-spacing: var(--spacing);
    text-transform: uppercase;
    font-weight: 500;
    font-size: .8em;
    transition: var(--transition);
    z-index: -10;
  }
  .shrink {
    position: absolute;
    top: -9px;
    left: 20px;
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
    right: 15px;
    top: -13px;
    padding: 5px 8px 4px 8px;
    margin: 5px;
    background: var(--grey);
    border: 1px solid;
    border-color: ${({ err }) => err ? 'var(--red)' : 'rgba(255, 255, 255, .2)'};
    border-radius: var(--border);
    color: ${({ err }) => err ? 'var(--red)' : 'var(--primary)'};
  }
  .over {
    color: var(--red);
  }
  .validate {
    border-color: var(--red);
  }
`

export default StyledTextarea;