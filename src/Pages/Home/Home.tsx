import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Cards/Card';
import Container from '../../components/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import { IResults } from '../../models/characters';
import { getCharacters } from '../../services/characterService';

function Home() {

  const data = useSelector((state: IResults) => state.characters);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  
  useEffect(()=>{
    getCharacters(page, dispatch);
  },[page, dispatch])
  
  return (
    <Container>
      <div className="grid">
        {
          data.isLoading ? <h1>Loading</h1> : data.results && data.results.map(item => <Card key={item.id} character={item} />)
        }
      </div>
      <Pagination />
    </Container>
  )
}

export default Home