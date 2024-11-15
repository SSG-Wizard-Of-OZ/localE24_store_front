

function StockReadComponent() {
    const moveToBack = () => {
        history.go(-1)
    }

    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img onClick={moveToBack} src="/src/assets/img/icons/back.png" alt="뒤로 가기" className="w-6 h-6 cursor-pointer"/>

                <div>
                    <div className="flex gap-2 items-center w-full">
                        <span className="text-lg whitespace-nowrap font-medium text-gray-700">이벤트명</span>
                        <p className="mt-1 w-full px-3 py-2 border-b rounded-md">부기와 함께하는 부산</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2 items-center w-full">
                            <span className="text-lg whitespace-nowrap font-medium text-gray-700">상품코드</span>
                            <p className="mt-1 w-full px-3 py-2 border-b rounded-md">1234567890</p>
                        </div>
                        <div className="flex gap-2 items-center w-full">
                            <span className="text-lg whitespace-nowrap font-medium text-gray-700">상품명</span>
                            <p className="mt-1 w-full px-3 py-2 border-b rounded-md">부기 키링</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-lg font-medium text-gray-700">재고 상세 현황</span>
                    <div className="-mx-4 py-4 overflow-x-auto">
                        {/* gird table */}
                        <div className="min-w-full leading-normal">
                            {/* table header */}
                            <div
                                className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-1 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>구분</span>
                                </div>
                                <div
                                    className="col-span-3 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>상품코드</span>
                                </div>
                                <div
                                    className="col-span-5 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>상품명</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>날짜</span>
                                </div>
                                <div className="col-span-1 h-full px-5 py-3 flex justify-center items-center">
                                    <span>수량</span>
                                </div>
                            </div>
                            {/* table body */}
                            <div
                                className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-1 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>입고</span>
                                </div>
                                <div
                                    className="col-span-3 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>1234567890</span>
                                </div>
                                <div
                                    className="col-span-5 h-full px-5 py-3 flex items-center border-r border-gray-400">
                                    <span>부기 키링</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>2024-11-11</span>
                                </div>
                                <div
                                    className="col-span-1 h-full px-5 py-3 flex justify-end items-center">
                                    <span>3</span>
                                </div>
                            </div>
                            {/* table footer */}
                            <div
                                className="grid grid-cols-12 h-15 border border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center font-semibold border-r border-gray-400">
                                    <span>총수량</span>
                                </div>
                                <div
                                    className="col-span-4 h-full px-5 py-3 flex items-center justify-end border-r border-gray-400">
                                    <span>100</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center font-semibold border-r border-gray-400">
                                    <span>현수량</span>
                                </div>
                                <div
                                    className="col-span-4 h-full px-5 py-3 flex items-center justify-end border-gray-400">
                                    <span>80</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StockReadComponent;