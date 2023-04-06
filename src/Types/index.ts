import { Axios } from "axios" 

export type Contact = {
    name: {
        firts: string,
        last: string,

    },
    email: string,
    picture: {
        medium: string
    }
    login:{
        uuid:string
    }
}