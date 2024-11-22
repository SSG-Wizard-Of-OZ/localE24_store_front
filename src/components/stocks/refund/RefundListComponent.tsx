
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPageResponse} from "../../../types/pageResponse.ts";
import {IAllProduct} from "../../../types/products.ts";
import LoadingComponent from "../../common/LoadingComponent.tsx";
import PageComponent from "../../common/PageComponent.tsx";
import {getProductsByStore} from "../../../apis/productAPI.ts";

const initialState:IPageResponse<IAllProduct> = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: { page: 1, size: 10 },
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    current: 1,
    totalPage: 0
}

function RefundListComponent() {

    const [query] = useSearchParams();

    const page: number = Number(query.get("page")) || 1;
    const size: number = Number(query.get("size")) || 10;

    const [loading, setLoading] = useState<boolean>(false);

    const [pageResponse, setPageResponse] = useState<IPageResponse<IAllProduct>>(initialState);

    useEffect(() => {
        setLoading(true);
        getProductsByStore(page, size).then((data) => {
            setPageResponse(data);
            setTimeout(() => {
                setLoading(false);
            }, 600);
        });
    }, [page, size]);


    const ProductDivs = pageResponse.dtoList.map((data) => {
        const {pno, pname, ename, quantity} = data

        return (
            <div
                key={pno}
                className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                <div
                    className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                    <span>{pno}</span>
                </div>
                <div
                    className="col-span-4 h-full p-4 flex items-center border-r border-gray-400">
                    <span>{pname}</span>
                </div>
                <div
                    className="col-span-4 h-full p-3 flex items-center border-r border-gray-400">
                    <span>{ename}</span>
                </div>
                <div
                    className="col-span-1 h-full p-1 flex justify-center items-center border-r border-gray-400">
                    <span>{quantity}</span>
                </div>
                <div
                    className="col-span-1 h-full p-1 flex justify-center items-center">
                    {/* 버튼 */}
                    <button
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        변경 신청
                    </button>
                </div>
            </div>
        )

    })

    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            {loading && <LoadingComponent/>}
            <div className="flex flex-col h-screen gap-2 border px-4 py-2 rounded-2xl bg-white shadow-md">
                {/* 검색 박스 */}
                <div className="mx-auto w-full px-4 py-6 bg-white border">
                    <div className="flex flex-col gap-5">
                        {/* 상품 키워드 입력 */}
                        <div className="flex items-center gap-4">
                            <label htmlFor="eventName" className="text-gray-700 font-medium">상품 키워드</label>
                            <input
                                type="text"
                                id="eventName"
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* 이벤트 키워드 입력 */}
                        <div className="flex items-center gap-4">
                            <label htmlFor="eventName" className="text-gray-700 font-medium">이벤트 키워드</label>
                            <input
                                type="text"
                                id="eventName"
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* 검색 버튼 */}
                        <button
                            className="self-end px-6 py-2 bg-gray-600 text-sm text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            검색
                        </button>
                    </div>
                </div>

                <div>
                    <span>이벤트 상품 목록</span>
                </div>
                {/* 검색 결과 리스트 */}
                {/* grid table */}
                <div className="-mx-4 px-4">
                    <div className="min-w-full leading-normal">
                        {/* table header */}
                        <div
                            className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div
                                className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                <span>상품번호</span>
                            </div>
                            <div
                                className="col-span-4 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                <span>상품명</span>
                            </div>
                            <div
                                className="col-span-4 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                <span>이벤트명</span>
                            </div>
                            <div
                                className="col-span-1 h-full p-2 flex gap-2 justify-center border-r border-gray-400 items-center">
                                <span>수량</span>
                            </div>
                            <div
                                className="col-span-1 h-full p-1 flex justify-center items-center border-r border-gray-400">
                                <span></span>
                            </div>
                        </div>
                        {/* table body */}
                        <div className="overflow-y-auto">
                            {ProductDivs}
                        </div>
                        {/* table footer */}
                        <div
                            className="grid grid-cols-12 h-15 border-t border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                        </div>
                    </div>
                </div>
                <PageComponent pageResponse={pageResponse}/>
            </div>
        </div>

    );
}

export default RefundListComponent;