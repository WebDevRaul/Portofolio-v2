import styled from 'styled-components';
import { portrait } from '../../../../utils/responsive';

const StyledReview = styled.div`
  margin-bottom: 10px;
  .review {
    position: relative;
    overflow: hidden;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 25px;
      margin-top: 25px;
      h5 {
        color: var(--darkWhite);
        margin-bottom: 30px;
        padding: 0 30px 0px 41px;
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
    .buttons {
      display: flex;
      justify-content: center;
      div {
        margin: 0 10px;
        cursor: pointer;
        color: var(--darkWhite);
        svg {
          font-size: 2.5em;
        }
        :hover {
          color: var(--secondary);
          transition: var(--transition);
        }
        :nth-child(1) {
          transform: rotate(180deg);
        }
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
        top: 142px
      }
    }
  }
  @media ${portrait.laptopL} {

  }
  @media ${portrait.laptop} {

  }
  @media ${portrait.tablet} {

  }
  @media ${portrait.mobileL} {
    .review {
      .box {
        padding: 0px;
        .photo {
          width: 50px;
          height: 50px;
        }
        h5 {
          margin-bottom: 20px;
          padding: 0 10px 0px 21px;
          height: 50px;
        }
      }
    }
    .review-bottom {
      ::before, ::after {
        top: 107px !important;
      }
    }
    .review-top, .review-bottom {
      ::before {
        left: 10px !important;
      }
      ::after {
        right: 10px !important;
      }
    }
  }
`

export default StyledReview;