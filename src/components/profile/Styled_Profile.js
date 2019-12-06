import styled from 'styled-components';

const StyledProfile = styled.section`
  width: 100%;
  .profile {
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: var(--grey);
    border-radius: var(--border);
    z-index: 10;
    /* max-width: 500px; */
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
    ::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -15px;
      width: 100%;
      height: 100%;
      border-radius: var(--border);
      background: var(--grey);
      opacity: .5;
      z-index: -10;
    }
    .photo {
      position: relative;
      width: 150px;
      height: 150px;
      margin-bottom: 24px;
      ::before {
        content: '';
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 75px;
        top: 10px;
        left: -10px;
        background: linear-gradient(135deg, rgba(120, 204, 109, .3) 0%, rgba(120, 204, 109, .01) 100%);
      }
      img {
        border-radius: 75px;
      }
    }
    h5 {
      color: var(--primary);
      font-size: 1.1em;
    }
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 45px;
      li {
        margin: 0 5px;
        color: var(--darkWhite);
      }
    }
  }
`

export default StyledProfile;