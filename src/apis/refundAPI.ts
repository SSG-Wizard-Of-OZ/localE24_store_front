import axios from "axios";

const host = 'http://localhost:8080/api/store/event/product/refund'

export const getRefundList = async (pno: number) => {

    const res = await axios.get(`${host}/${pno}`)

    return res.data
}

export const postRefund = async (pno: number, desc:string) => {
    // const params = JSON.stringify({pno,desc})

    const res = await axios.post(`${host}/${pno}`, {pno, desc})

    return res.data
}