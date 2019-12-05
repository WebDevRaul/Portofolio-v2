import styled from 'styled-components';

const StyledAboutMe = styled.div`
  .about-me {
    margin-bottom: 30px;
    .row {
      .col-6 {
        :nth-child(1) {
          ::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: var(--bgToRight);
          }
          .helper {
            ::before {
              content: '';
              display: block;
              position: absolute;
              left: 99.9%;
              width: 1px;
              height: 100%;
              background: var(--bgFromTop);
            }
          }
        }
        :nth-last-child(1) {
          ::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: var(--bgToLeft);
          }
        }
      }
    }
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0 20px 10px;
      position: relative;
      ::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        width: 50%;
        height: 1px;
        background: var(--bgToRight);
      }
      ::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 50%;
        height: 1px;
        background: var(--bgToLeft);
      }
      :nth-last-child(1) {
        ::after, ::before {
          display: none;
        }
      }
    }
    p {
      padding: 10px;
      margin-bottom: 0px;
      color: var(--darkWhite);
      letter-spacing: var(--spacing);
    }
  }
`

export default StyledAboutMe;