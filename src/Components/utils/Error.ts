import axios from "axios";

export const errorMassage = (error: unknown)=> {
    if (axios.isAxiosError(error)) {
        return alert(error.message)
    } else {
        throw Error('Native Errors')
    }
}