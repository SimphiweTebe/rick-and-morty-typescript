import styled from "styled-components";

const Paginator = styled.div`
  position: relative;
  width: 100%;
`;

type Props = {
  info: {
    pages: number;
    next: number | null;
    prev: number | null
  }
}

function Pagination({info}: Props) {

  const { pages, next, prev} = info;
  return (
    <div>Pagination</div>
  )
}

export default Pagination