import axios from "axios";

const host = 'http://localhost:8080/api/store/event'

export const getEventList = async (page?:number, size?:number) => {

    const pageValue:number = page || 1
    const sizeValue:number = size || 10

    const res = await axios.get(`${host}/assigned?sno=${5}&page=${pageValue}&size=${sizeValue}`);


    return res.data
}

export const getEventOne = async (eno:number) => {
    const res = await axios.get(`${host}/assigned/${eno}`)

    return res.data
}