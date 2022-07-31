import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ISingleCharacter } from '../../models/characters';

type Props = {
    character: ISingleCharacter;
}

function Card({ character }: Props) {
    
    const {id, image, name, species, status} = character;
    
  return (
    <StyledCard>
        <Link to={`/character/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div className="details">
            <h4>{name}</h4>
            <span><strong>Species:</strong> {species}</span>
            <span><strong>Status:</strong> {status}</span>
        </div>
        <Link className="view" to={`/character/${id}`}>view</Link>
    </StyledCard>
  )
}

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    h4{
        font-size: 18px;
    }

    img{
        display: block;
        width: 100%;
        margin-bottom: 10px;
    }

    .details{
        display: flex;
        flex-direction: column;
    }

    .view{
        flex: 1;
        text-align: center;
        background-color: black;
        color: #fff;
        margin-top: 15px;
        padding: 8px;
        border-radius: 5px;
        font-weight: 600;
    }
`;

export default Card