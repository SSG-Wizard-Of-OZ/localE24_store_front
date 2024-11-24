import axios from "axios";
import {IProductSearch} from "../types/products.ts";

const host = 'http://localhost:8080/api/store/event/product'

export const getProductsByEvent = async (eno:number) => {
    const res = await axios.get(`${host}/${eno}`)

    return res.data
}

export const getProductsByStore = async (page?:number, size?:number, searchParams?:IProductSearch) => {
    const pageValue:number = page || 1
    const sizeValue:number = size || 10
    if (searchParams?.pkeyword == ""){
        searchParams.pkeyword = null
    }
    if (searchParams?.ekeyword == ""){
        searchParams.ekeyword = null
    }
    const params = {page: String(pageValue), size: String(sizeValue), ...searchParams}

    const res = await axios.get(`${host}/stock?sno=${3}`, {params});

    return res.data
}

