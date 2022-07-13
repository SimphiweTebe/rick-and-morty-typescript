import styled from 'styled-components';
import useScrollTop from '../../hooks/useScrollTop';
import {ISingleCharacter} from '../../models/characters';

const Header = styled.div`
  position: relative;
  display: flex;
  gap: 50px;

  .img{
    display: block;
    width: 100%;
    flex: 1;

    img{
        width: 100%;
    }
  }

  .details{
    position: relative;
    flex: 2;
  }
`;

type Props = {
    character: ISingleCharacter
}

function CharacterDetails({ character }: Props) {

    const {location, origin, episode} = character;
    useScrollTop();
    
  return (
    <Header>
        <div className="img">
            <img src={character.image} alt={character.name} />
        </div>
        <div className="details">
            <h1>{character.name}</h1>
            <h4>Species: {character.species}</h4>
            <h5>Location:</h5>
            <ul className='details__location'>
                <li>Dimension: {location.dimension}</li>
                <li>Name: {location.name}</li>
                <li>Type: {location.type}</li>
            </ul>
            <h5>Origin:</h5>
            <ul className='details__origin'>
                <li>Dimension: {origin.dimension}</li>
                <li>Name: {origin.name}</li>
            </ul>
            <h5>Episodes:</h5>
            <ul className="details__episodes">
                {
                    episode && episode.map(ep => <li key={ep.name}>{ep.name}</li>)
                }
            </ul>
        </div>
       
    </Header>
  )
}

export default CharacterDetails