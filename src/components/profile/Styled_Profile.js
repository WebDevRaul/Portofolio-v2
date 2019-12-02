import styled from 'styled-components';
import { Primary, Grey } from '../../layout/index.scss';

const StyledProfile = styled.section`
  .profile {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: ${Grey};
  }
`

export default StyledProfile;