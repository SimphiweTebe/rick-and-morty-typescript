import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {IResults} from '../../models/characters';

const StyledNav = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    padding: 20px 10px;
    background-color: #000;
    width: 100%;
    color: #fff;
    z-index: 1000;

    a{
      font-weight: 700;
      font-size: 19px;
    }

    .data{
      position: relative;
      width: 93%;
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;


      &__stats{
        font-weight: 500;
        font-size: 13px;
        color: #999;
      }
    }
`



function Nav() {
  const data = useSelector((state: IResults) => state.characters);
  const {info} = data;
  
  return (
    <StyledNav data-testid="nav">
        <div className="data">
          <Link to="/" title='link'>RickAndMorty</Link>
          <span className="data__stats">Found {info.count} results in {info.pages} pages</span>
        </div>
    </StyledNav>
  )
}

export default Nav