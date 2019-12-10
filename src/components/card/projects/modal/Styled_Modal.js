import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  background: black;
  width: 100%;
  left: 0px;
  top: 0;
  z-index: 50;
  .modal {
    display: flex;
    background-color: red;
  }
`

export default StyledModal;