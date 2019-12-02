import styled from 'styled-components';
import { Primary, DarkWhite, Grey } from '../../layout/index.scss';

const StyledProfile = styled.section`
  .profile {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: ${Grey};
    h5 {
      color: ${Primary};
      font-size: 1.1em;
    }
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;
      li {
        margin: 0 5px;
        color: ${DarkWhite}
      }
    }
  }
`

export default StyledProfile;