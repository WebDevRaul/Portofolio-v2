import styled from 'styled-components';

const StyledForm = styled.div`
  form {
    .data {
      display: flex;
      width: 100%;
      div {
        :nth-child(1) {
          padding: 0 20px 0 10px;
        }
        :nth-last-child(1) {
          padding: 0 10px 0 20px;
          label {
            left: 20px !important;
          }
        }
      }
    }
    button {
      padding-left: 0;
      display: flex;
      align-items: center;
      font-size: .9em;
      color: var(--lightWhite);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      svg {
        transform: rotate(90deg);
      }
      :hover {
        transition: var(--transition);
        color: var(--secondary);
      }
    }
  }
`
export default StyledForm;