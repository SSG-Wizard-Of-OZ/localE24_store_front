import axios from "axios";

const host = 'http://localhost:8080/api/store/event/product/refund'

export const getProduct = (productId: string) => {
    return axios.get(host + `/products/${productId}`, {})
}