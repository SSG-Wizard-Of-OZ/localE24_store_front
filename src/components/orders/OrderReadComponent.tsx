

function OrderReadComponent() {
    const moveToBack = () => {
        history.go(-1)
    }

    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img onClick={moveToBack} src="/src/assets/img/icons/back.png" alt="뒤로 가기" className="w-6 h-6 cursor-pointer"/>

                <div>
                    <div>
                        <span className="text-lg font-medium text-gray-700">발주명</span>
                        <p className="mt-1 w-full px-3 py-2 border rounded-md">부기와 함께하는 부산 2024-10-15</p>
                    </div>
                    <div>
                        <span className="text-lg font-medium text-gray-700">발주코드</span>
                        <p className="mt-1 w-full px-3 py-2 border rounded-md">1234567890</p>
                    </div>
                    <div>
                        <span className="text-lg font-medium text-gray-700">이벤트명</span>
                        <p className="mt-1 w-full px-3 py-2 border rounded-md">부기와 함께하는 부산</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <label className="text-gray-700 whitespace-nowrap font-medium">발주 날짜</label>
                            <p className="mt-1 w-full px-3 py-2 border rounded-md">2024-10-15</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="text-gray-700 whitespace-nowrap font-medium">납기 날짜</label>
                            <p className="mt-1 w-full px-3 py-2 border rounded-md">2024-10-25</p>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg font-medium text-gray-700">상태</span>
                        <p className="max-w-fit mt-1 px-3 py-2 border rounded-md">대기중</p>
                    </div>
                </div>
                <div>
                    <span className="text-lg font-medium text-gray-700">상품 리스트</span>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="min-w-full leading-normal">
                            {/* table header */}
                            <div
                                className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-3 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>상품코드</span>
                                </div>
                                <div
                                    className="col-span-4 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>상품명</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>공간 대여<br/>필요 여부</span>
                                </div>
                                <div
                                    className="col-span-1 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>수량</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center">
                                    <span>금액</span>
                                </div>
                            </div>
                            {/* table body */}
                            <div
                                className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-3 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>1234567890</span>
                                </div>
                                <div
                                    className="col-span-4 h-full px-5 py-3 flex items-center border-r border-gray-400">
                                    <span>부기 키링</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>필요</span>
                                </div>
                                <div
                                    className="col-span-1 h-full px-5 py-3 flex justify-center items-center border-r border-gray-400">
                                    <span>3</span>
                                </div>
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-end items-center">
                                    <span>30000</span>
                                </div>
                            </div>
                            {/* table footer */}
                            <div
                                className="grid grid-cols-12 h-15 border border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-2 h-full px-5 py-3 flex justify-center items-center font-semibold border-r border-gray-400">
                                    <span>총금액</span>
                                </div>
                                <div
                                    className="col-span-10 h-full px-5 py-3 flex items-center justify-end border-gray-400">
                                    <span>30000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderReadComponent;