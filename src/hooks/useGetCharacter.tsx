import { useEffect, useState } from 'react';
import {apolloClient} from '../graphql/apolloClient';
import { GET_SINGLE_CHARACTER } from '../services/queries'

function useGetCharacter(id: number) {

    const [character, setCharacter] = useState(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
       const queryData = async ()=>{
        try {
            setLoading(true);
            const { data } = await apolloClient.query({ query: GET_SINGLE_CHARACTER, variables: { id }});
            setLoading(false);
            setCharacter(data.character);
           } catch (error) {
            console.log(error); 
           }
       } 
       queryData()
    },[id]);

  return { isLoading, character}
}

export default useGetCharacter