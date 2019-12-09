import styled from 'styled-components';

const StyledProject = styled.div`
  .project {
    padding: 10px;
    .project-box {
      width: 100%;
      margin: 10px auto;
      padding: 10px;
      text-align: center;
      div {
        :hover {
          img {
            transition: var(--transition)!important;
            transform: scale(1.1);
          }
          ::after {
            cursor: pointer;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
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