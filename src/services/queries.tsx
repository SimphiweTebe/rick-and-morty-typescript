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
export const GET_SINGLE_CHARACTER = gql`
    query($id: ID){
      characters(id: $id){
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