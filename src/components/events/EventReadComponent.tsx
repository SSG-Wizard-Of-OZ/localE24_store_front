
function EventReadComponent() {

    const moveToBack = () => {
        history.go(-1)
    }

    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img onClick={moveToBack} src="/src/assets/img/icons/back.png" alt="뒤로 가기" className="w-6 h-6 cursor-pointer"/>

                <div>
                    <span className="text-lg font-medium text-gray-700">이벤트명</span>
                    <p className="mt-1 w-full px-3 py-2 border rounded-md">부기와 함께하는 부산</p>
                </div>

                <div>
                    <span className="text-lg font-medium text-gray-700">제작자</span>
                    <p className="mt-1 w-full px-3 py-2 border rounded-md">홍길동</p>
                </div>
                <div>
                    <label className="text-lg font-medium text-gray-700">진행기간</label>
                    <div className="flex space-x-2 mt-1 gap-2">
                        <span className="px-5 py-2 border rounded-md">2024-10-24</span>
                        <span className="flex items-center">~</span>
                        <span className="px-5 py-2 border rounded-md">2024-11-24</span>
                    </div>
                </div>
                <div>
                <span className="text-lg font-medium text-gray-700">공간대여 필요 여부</span>
                    <p className="max-w-fit mt-1 px-3 py-2 border rounded-md">필요</p>
                </div>
                <div>
                    <span className="text-lg font-medium text-gray-700">상품 리스트</span>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-4">
                            <div className="max-w-xs">
                                <img className="rounded-md" src="/src/assets/img/food/M28.jpeg" alt="img1"/>
                            </div>
                            <div>
                                <div>
                                    <span>상품명 : </span>
                                    <span>상품1</span>
                                </div>
                                <div>
                                    <span>가격 : </span>
                                    <span>10000</span>
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="max-w-xs">
                                <img className="rounded-md" src="/src/assets/img/food/M28.jpeg" alt="img1"/>
                            </div>
                            <div>
                                <div>
                                    <span>상품명 : </span>
                                    <span>상품2</span>
                                </div>
                                <div>
                                    <span>가격 : </span>
                                    <span>20000</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-4 justify-center">
                    <button className="flex-1 max-w-xs px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        승인
                    </button>
                    <button className="flex-1 max-w-xs px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        거절
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventReadComponent;