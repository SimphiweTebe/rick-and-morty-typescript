import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    padding: 20px 10px;
    background-color: #000;
    width: 100%;
    color: #fff;
    z-index: 1000;
`

function Nav() {
  return (
    <StyledNav data-testid="nav">
        <Link to="/" title='link'>RickAndMorty</Link>
    </StyledNav>
  )
}

export default Nav