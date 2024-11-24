import axios from "axios";
import {IEventSearch} from "../types/events.ts";

const host = 'http://localhost:8080/api/store/event'

export const getEventList = async (page?:number, size?:number,searchParam?:IEventSearch) => {

    const pageValue:number = page || 1
    const sizeValue:number = size || 10

    const params = {page: String(pageValue), size: String(sizeValue), ...searchParam}
    const sno = '5';

    const res = await axios.get(`${host}/assigned?sno=${sno}`, {params});


    return res.data
}

export const getEventOne = async (eno:number) => {
    const res = await axios.get(`${host}/assigned/${eno}`)

    return res.data
}

export const putEventStatus = async (eno:number, status:number) => {
    const res = await axios.put(`${host}/assigned/update`, {eno, status})
    return res.data
}