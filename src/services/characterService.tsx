import { apolloClient } from "../graphql/apolloClient";
import { setCharacters, charactersLoading } from "../redux/characterSlice";
import { HOME_CHARACTERS, PAGINATE_CHARACTERS } from "./queries";


export const homeCharacters = async (_: any, dispatch: any) => {
    try {
        dispatch(charactersLoading());
        const {data} = await apolloClient.query({ query: HOME_CHARACTERS})        
        dispatch(setCharacters(data.characters))    
    } catch (error) {
        console.log(error);   
    }
}

export const pageCharacters = async (page: number, dispatch: any) => {
    
    try {
        dispatch(charactersLoading());
        const {data} = await apolloClient.query({ query: PAGINATE_CHARACTERS, variables: {page} });
        dispatch(setCharacters(data.characters)) 
           
    } catch (error) {
        console.log(error);   
    }
}