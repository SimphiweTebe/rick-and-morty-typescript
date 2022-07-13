import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import useGetCharacter from '../../hooks/useGetCharacter';
import CharacterDetails from './CharacterDetails';

function Single() {

  const {id} = useParams();
  const { character, isLoading} = useGetCharacter(Number(id));
  
  return (
   <Container>
    {
      isLoading ? <h1>Loading...</h1> : character && <CharacterDetails character={character}/>
    }
   </Container>
  )
}

export default Single