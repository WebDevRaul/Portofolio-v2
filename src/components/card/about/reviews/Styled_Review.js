import styled from 'styled-components';
import { portrait } from '../../../../utils/responsive';

const StyledReview = styled.div`
  padding-bottom: 20px;
  .review {
    overflow: hidden;
    padding: 0 10px;
    h5 {
      :nth-child(1) {
        padding: 0px;
      }
    }
    .box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 25px;
      h5 {
        color: var(--darkWhite);
        margin: 15px 10px;
        padding: 0 10px 0 20px;
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
      .padding {
        padding-top: 2px;
        padding-left: 10px;
      }
    }
    .buttons {
      display: flex;
      justify-content: center;
      div {
        margin: 0 10px;
        cursor: pointer;
        color: var(--primary);
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
  }
  @media ${portrait.mobileL} {
    .review {
      .box {
        .photo {
          width: 50px;
          height: 50px;
        }
        h5 {
          margin-bottom: 20px;
          height: 50px;
        }
      }
    }
  }
`

export default StyledReview;