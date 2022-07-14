import { apolloClient } from "../graphql/apolloClient";
import { setCharacters, charactersLoading } from "../redux/characterSlice";
import { GET_ALL_CHARACTERS } from "./queries";


export const getCharacters = async (page: number, dispatch: any) => {
    try {
        dispatch(charactersLoading());
        const {data} = await apolloClient.query({ query: GET_ALL_CHARACTERS, variables: page })
        dispatch(setCharacters(data.characters))    
    } catch (error) {
        console.log(error);   
    }
}