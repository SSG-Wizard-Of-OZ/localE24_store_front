import axios from "axios";

const host = 'http://localhost:8080/api/store/event/product'

export const getEventProducts = async (eno:number) => {
    const res = await axios.get(`${host}/${eno}`)

    return res.data
}

export const getProductsByStore = async  (page?:number, size?:number) => {
    const pageValue:number = page || 1
    const sizeValue:number = size || 10

    const res = await axios.get(`${host}/stock?sno=${5}&page=${pageValue}&size=${sizeValue}`);

    return res.data
}

