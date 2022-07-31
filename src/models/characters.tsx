export interface ICharacters{
    characters: IResults
}

export interface IResults {
    info :{
        count: number
        pages: number
        next: number
        prev: number | null
    },
    currentPage?: number | null,
    isLoading?: boolean,
    results: ISingleCharacter[]
}

export interface ISingleCharacter {
    id: string,
    name: string,
    status: string,
    species: string,
    image: string
}

export interface ICharacterDetails {
    name: string,
    image: string,
    species: string,
    created: string,

    origin:{
      name: string,
      dimension: string
    },

    episode:[{ name: string}],
    
    location:{
      name: string
      dimension: string
      type: string
    }
}
