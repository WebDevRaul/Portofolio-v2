import styled from 'styled-components';

const StyledProject = styled.div`
  .project {
    .project-box {
      position: relative;
      width: 100%;
      margin: 10px auto;
      text-align: center;
      .gatsby-image-wrapper {
        :hover {
          img {
            transition: var(--transition)!important;
            transform: scale(1.1);
          }
          ::after {
            cursor: pointer;
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 200px;
            height: 200px;
            background: linear-gradient(135deg, rgba(120, 205, 110, 0.2) 0%, rgba(120, 205, 110, 0.01) 100%);
            z-index: 10;
          }
        }
      }
      h5 {
        margin-top: 10px;
        color: var(--primary);
      }
      img {
        transition: var(--transition)!important;
        position: relative;
      }
    }
  }
`

export default StyledProject;