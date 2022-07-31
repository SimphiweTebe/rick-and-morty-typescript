import { gql } from "@apollo/client";

export const HOME_CHARACTERS = gql`
    query{
      characters{
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
}`

export const PAGINATE_CHARACTERS = gql`
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