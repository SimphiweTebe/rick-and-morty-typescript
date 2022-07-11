import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
    query($page: Int){
  characters(page: $page){
    info{
      count
      pages
      next
      prev
    }
    results{
      id
      name
      status
      species
      image
    }
  }
}
`