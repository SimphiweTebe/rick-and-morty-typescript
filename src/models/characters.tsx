export interface IResults {
    characters:{
        info :{
            count: number
            pages: number
            next: number
            prev: number | null
        },
        results: ICharacters[]
    }
}

export interface ICharacters {
    id: string,
    name: string,
    status: string,
    species: string,
    image: string
}

// export interface ISingleCharacter {

// }