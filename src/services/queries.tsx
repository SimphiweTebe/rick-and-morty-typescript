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
    query($id: ID!){
      character(id: $id){
        name
        image
        species
        created
        origin{
          name
          dimension
        }
        episode{
          name
        }
        location{
          name
          dimension
          type
        }
    }
}
`