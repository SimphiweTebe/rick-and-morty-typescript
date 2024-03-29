import styled from "styled-components";

type Props = {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void
}

function Pagination({page, totalPages, handlePagination}: Props) { 
    
  return (
    <>
        <Paginator>
          <div className="paginate">
            {
              page !== 1 && (
                <button className="paginate__next" data-testid="prev__btn" onClick={() => handlePagination(page - 1)}>&lt;</button>
              )
            }
            <button className="paginate__item" onClick={() => handlePagination(1)}>{1}</button>
            {
              page > 3 && <button className="paginate__separator">...</button>
            }
            {
              page === totalPages && totalPages > 3 && (
                <button onClick={() => handlePagination(page - 2)} className="paginate__item">{page - 2}</button>
              )
            }
            {
              page > 2 && (
                <button onClick={() => handlePagination(page - 1)} className="paginate__item">{page - 1}</button>
              )
            }
            {
              page !== 1 && page !== totalPages && (
                <button className="paginate__item" onClick={() => handlePagination(page)}>{page}</button>
              )
            }
            {
              page < totalPages -1 && (
                <button className="paginate__item" onClick={() => handlePagination(page + 1)}>{page + 1}</button>
              )
            }
            {
              page === 1 && totalPages > 3 && (
                <button className="paginate__item" onClick={() => handlePagination(page + 2)}>{page + 2}</button>
              )
            }
            {
              page < totalPages - 2 && <button className="paginate__separator">...</button>
            }
            <button className="paginate__item" onClick={() => handlePagination(totalPages)}>{totalPages}</button>
            {
              page !== totalPages && (
                <button className="paginate__next" data-testid="next__btn" onClick={() => handlePagination(page + 1)}>&gt;</button>
              )
            }
          </div>
        </Paginator>
    </>
  )
}

const Paginator = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 150px;
  justify-content: center;

  .paginate{
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;

    button{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
    }

    &__item{
      cursor: pointer;
      
      &:hover{
        color: #fff;
        background-color: blue;
      }
    }
  }

`;

export default Pagination