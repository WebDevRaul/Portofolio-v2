import styled from 'styled-components';

const StyledReview = styled.div`
  margin-bottom: 30px;
  .review {
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 0 25px;
      margin-top: 25px;
      h5 {
        color: var(--darkWhite);
        margin-bottom: 30px;
        padding: 0 30px;
        opacity: 0.5;
        height: 75px;
        overflow: hidden;
        overflow-y: scroll;
        word-break: break-all;
        text-align: center;
      }
      .photo {
        width: 75px;
        height: 75px;
        margin-bottom: 14px;
        img {
          border-radius: 50px;
        }
      }
      .padding-top {
        padding-top: 2px;
      }
    }
    .review-top, .review-bottom {
      ::before, ::after {
        content: '';
        display: block;
        position: absolute;
        width: 33%;
        height: 1px;
      }
    }
    .review-top {
      ::before, ::after {
        top: -10px;
      }
    }
    .review-top, .review-bottom {
      ::before {
        left: 50px;
        background: var(--bgToLeft);
      }
      ::after {
        right: 50px;
        background: var(--bgToRight);
      }
    }
    .review-bottom {
      ::before, ::after {
        top: 85px;
      }
    }
  }
`

export default StyledReview;