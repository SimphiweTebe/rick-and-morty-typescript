import { useState } from 'react';
import styled from 'styled-components';
import {ICharacterDetails} from '../../models/characters';

const Button = styled.button`
    display: inline-block;
    position: relative;
    padding: 8px 30px;
`

type Props = {
    character: ICharacterDetails
}

function CharacterDetails({ character }: Props) {

    const {location, origin, episode} = character;
    const [showEpisodes, setShowEpisodes] = useState(false);

    const toggleEpisodes = ()=> {
        setShowEpisodes(!showEpisodes)
    } 
    
  return (
    <Header>
        <div className="img">
            <img src={character.image} alt={character.name} />
        </div>
        <div className="details">
            <h1>{character.name}</h1>
            <h4>Species: {character.species}</h4>
            
            <ul className='details__location'>
                <li><h5>Dimension info</h5></li>
                <li><strong>Dimension:</strong> {location.dimension}</li>
                <li><strong>Name:</strong> {location.name}</li>
                <li><strong>Type:</strong> {location.type}</li>
            </ul>
            
            <ul className='details__origin'>
                <li><h5>Origin info</h5></li>
                <li><strong>Dimension:</strong> {origin.dimension}</li>
                <li><strong>Name:</strong> {origin.name}</li>
            </ul>
            <Button onClick={toggleEpisodes}>{ showEpisodes ? 'Hide' : 'Show'} Episode list</Button>
            {
                showEpisodes && (
                    <ol className="details__episodes">
                {
                    episode.map(ep => <li key={ep.name}>{ep.name}</li>)
                }
                    </ol>
                )
            }
        </div>
       
    </Header>
  )
}

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

export default CharacterDetails