import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICharacters } from '../../models/characters';

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    img{
        display: block;
        width: 100%;
        margin-bottom: 10px;
    }
`;

type Character = {
    character: ICharacters
}

function Card({ character }: Character) {
    const {id, image, name, species, status} = character;
    
  return (
    <StyledCard>
        <Link to={`/character/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div className="card__details">
            <h4>{name}</h4>
            <h5>{species}</h5>
            <h5>{status}</h5>
        </div>
        <Link to={`/character/${id}`}>view</Link>
    </StyledCard>
  )
}

export default Card