import styled from 'styled-components'

const DesktopNavbarWrapper = styled.nav`
  @media (max-width: 920px) {
    display: none;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    box-shadow: var(--shadow-2);
    padding: 0rem 1rem;
    text-align: center;
  }
  .navbar {
    ul {
      display: flex;
      a {
        padding: 0.5rem;
        text-align: center;
        transition: var(--transition);
        color: var(--black);
        font-weight: 600;
        :hover {
          transition: var(--transition);
          background-color: var(--primary-1);
        }
      }
      .active {
        color: var(--primary-5);
      }
    }
  }
`
export default DesktopNavbarWrapper
