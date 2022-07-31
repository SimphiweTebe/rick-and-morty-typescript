import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Cards/Card';
import Container from '../../components/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import useScrollTop from '../../hooks/useScrollTop';
import { ICharacters } from '../../models/characters';
import { pageCharacters } from '../../services/characterService';

function Home() {

  const data = useSelector((state: ICharacters) => state.characters);
  const page = useSelector<ICharacters>((state) => state?.characters.currentPage);

  const [currentPage, setCurrentPage] = useState<number>(Number(page));
  const totalPages = data.info.pages;
  
  const dispatch = useDispatch();

  useScrollTop();
  
  useEffect(()=>{
    pageCharacters(currentPage,dispatch);
  },[dispatch, currentPage, page]);  

  const handlePages = (updatePage: number) => setCurrentPage(updatePage);
  
  return (
    <Container>
      <div className="grid">
        {
          data.isLoading ? <h1>Loading</h1> : data?.results.map(item => <Card key={item.id} character={item} />)
        }
      </div>
      {
        !data.isLoading && <Pagination page={currentPage} totalPages={totalPages} handlePagination={handlePages}/>
      }
    </Container>
  )
}

export default Home