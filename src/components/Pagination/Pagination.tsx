import React from 'react'

type Props = {
  currentPage: number;
  maxPageLimit: number;
  minPageLimit: number;
}

function Pagination(props: Props) {

  const { currentPage, maxPageLimit, minPageLimit} = props;
  return (
    <div>Pagination</div>
  )
}

export default Pagination