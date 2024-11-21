

function StockListComponent() {
    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            <div className="flex flex-col h-screen gap-2 border px-4 py-2 rounded-2xl bg-white shadow-md">
                {/* 검색 박스 */}
                <div className="mx-auto w-full px-4 py-6 bg-white border">
                    <div className="flex gap-5">
                        {/* 검색조건 선택 */}
                        <select
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="a">전체</option>
                            <option value="b">상품코드</option>
                            <option value="c">상품명</option>
                        </select>
                        {/* 키워드 입력 */}
                        <input type="text" placeholder={"키워드를 입력해 주세요"}
                               className="border border-black px-2"/>
                        {/* 검색 버튼 */}
                        <button
                            className="px-6 py-2 bg-gray-600 text-sm text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            검색
                        </button>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className="px-6 py-2 bg-gray-600 text-sm text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        발주 신청
                    </button>
                </div>

                <div>
                    <span>전체 재고</span>
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
                                <span>상품코드</span>
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
                                className="col-span-2 h-full p-2 flex gap-2 justify-center items-center">
                                <span>실 수량</span>
                                <button>▼( 오름차순 내림차순 정리 )</button>
                            </div>
                        </div>
                        {/* table body */}
                        <div className="overflow-y-auto">
                            <div
                                // onClick={moveToRead}
                                className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                    <span>1234567890</span>
                                </div>
                                <div
                                    className="col-span-4 h-full p-4 flex items-center border-r border-gray-400">
                                    <span>부기 키링</span>
                                </div>
                                <div
                                    className="col-span-4 h-full p-3 flex items-center border-r border-gray-400">
                                    <span>이벤트명</span>
                                </div>
                                <div
                                    className="col-span-2 h-full p-1 flex justify-center items-center ">
                                    <span>8</span>
                                </div>
                            </div>
                        </div>
                        {/* table footer */}
                        <div
                            className="grid grid-cols-12 h-15 border-t border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockListComponent;