
export interface IProduct {
    pno: number,
    pname: string,
    pdesc: string,
    price: number,
    fileNames: string[]
}

export interface IAllProduct extends IProduct {
    ename:string,
    quantity:number
}

export interface IProductSearch  {
    pkeyword: string | null;
    ekeyword: string | null;
}