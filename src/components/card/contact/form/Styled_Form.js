import styled from 'styled-components';

const StyledForm = styled.div`
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
`
export default StyledForm;