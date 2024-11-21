import axios from "axios";

const host = 'http://localhost:8080/api/store/event/product'

export const getEventProducts = async (eno:number) => {
    const res = await axios.get(`${host}/${eno}`)

    return res.data
}
