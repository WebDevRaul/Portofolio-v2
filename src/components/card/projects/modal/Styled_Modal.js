import styled from 'styled-components';

const StyledModal = styled.div`
  position: absolute;
  background: black;
  width: 100%;
  left: 0px;
  top: 0;
  z-index: 50;
  .modal {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: calc(100% - 2px);
    padding: 20px 10px 20px 18px;
    overflow-y: scroll;
    z-index: 100;
    .modal-top, .modal-bottom {
      position: fixed;
      width: 100%;
      height: 20px;
      display: block;
      background: var(--grey);
      z-index: 110;
    }
    .modal-top {
      top: 0;
      left: 0;
    }
    .modal-bottom {
      bottom: 0;
      left: 0;
    }
    .close-modal {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export default StyledModal;