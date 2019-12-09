import styled from 'styled-components';

const StyledPhoto = styled.div`
  .photo {
    position: relative;
    width: 100%;
    padding: 10px 10px 5px 10px;
    margin: 0 auto;
    .top-left, .top-right, .bottom-left, .bottom-right {
      ::before {
        content: '';
        position: absolute;
      }
      ::after {
        content: '';
        position: absolute;
      }
    }
    .top-left, .top-right {
      ::before {
        width: 25%;
        height: 1px;
        top: 0;
      }
      ::after {
        width: 1px;
        height: 25%;
        top: 0;
      }
    }
    .top-left, .bottom-left {
      ::before {
        left: 1px;
        background: var(--bgToLeft)
      }
      ::after {
        left: 0;
      }
    }
    .top-left, .top-right {
      ::after {
        background: var(--bgFromTop)
      }
    }
    .bottom-left, .bottom-right {
      ::after {
        background: var(--bgFromBottom)
      }
    }

    .top-right, .bottom-right {
      ::before {
        right: 1px;
        background: var(--bgToRight)
      }
      ::after {
        right: 0;
      }
    }
    .bottom-left, .bottom-right {
      ::before {
        width: 25%;
        height: 1px;
        bottom: 0;
      }
      ::after {
        width: 1px;
        height: 25%;
        bottom: 0;
      }
    }
  }
`

export default StyledPhoto;