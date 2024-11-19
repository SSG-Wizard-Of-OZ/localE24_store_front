import {useState} from "react";


function OrderApplyComponent() {

    const [productName, setProductName] = useState('상품명1');
    const [productCode, setProductCode] = useState('1234567890');
    const [eventName, setEventName] = useState('이벤트명1');

    const handleChangeProductCode = (e) => {
        setProductCode(e.target.value);
    }

    const handleChangeProductName = (e) => {
        setProductName(e.target.value);
    }

    const handleChangeEventName = (e) => {
        setEventName(e.target.value);
    }

    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            <div className="flex h-screen gap-2 border px-4 py-2 rounded-2xl bg-white shadow-md">
                {/* 발주 신청 상품추가 박스 */}
                <div className="flex flex-col gap-3 w-1/2">
                    {/* 검색 박스 */}
                    <div className="mx-auto w-full px-4 py-6 bg-white border">
                        <div className="flex flex-col gap-5">
                            {/* 상품코드 및 상품명 입력 */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-3 w-1/2">
                                    <label htmlFor="eventName" className="text-gray-700 whitespace-nowrap font-medium">상품명</label>
                                    <input
                                        type="text"
                                        id="eventName"
                                        value={productName}
                                        onChange={handleChangeProductName}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="flex items-center gap-3 w-1/2">
                                    <label htmlFor="makerName" className="text-gray-700 whitespace-nowrap font-medium">상품 코드</label>
                                    <input
                                        type="text"
                                        id="makerName"
                                        value={productCode}
                                        onChange={handleChangeProductCode}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                            {/* 이벤트명 및 공간대여 필요 여부 입력 */}
                            <div className="flex gap-4">
                                <div className="flex items-center gap-3 w-1/2">
                                    <label htmlFor="eventName" className="text-gray-700 whitespace-nowrap font-medium">이벤트명</label>
                                    <input
                                        type="text"
                                        id="eventName"
                                        value={eventName}
                                        onChange={handleChangeEventName}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                                <div className="flex items-center gap-3 w-1/2">
                                    <label className="text-gray-700 font-medium">공간대여</label>
                                    <ul className="flex gap-2">
                                        <li>
                                            <input type="radio" id="space1" name="spaceAvailability"
                                                   className="hidden peer"/>
                                            <label htmlFor="space1"
                                                   className="inline-flex items-center p-2 text-gray-600 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 peer-checked:bg-blue-100 peer-checked:border-blue-500 peer-checked:text-blue-600">
                                                <span className="text-sm font-medium">필요</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="space2" name="spaceAvailability"
                                                   className="hidden peer"/>
                                            <label htmlFor="space2"
                                                   className="inline-flex items-center p-2 text-gray-600 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 peer-checked:bg-blue-100 peer-checked:border-blue-500 peer-checked:text-blue-600">
                                                <span className="text-sm font-medium">불필요</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            {/* 검색 버튼 */}
                            <div className="flex justify-end">
                                <button
                                    className="px-6 py-2 bg-gray-600 text-sm text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                >
                                    검색
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 검색 결과 리스트 */}
                    <div>
                        <div className="flex justify-end">
                            <button className="px-6 py-2 bg-gray-600 text-sm text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                상품 추가
                            </button>
                        </div>
                        <div className="-mx-4 p-4">
                            <div className="min-w-full leading-normal">
                                {/* table header */}
                                <div
                                    className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <input type="checkbox"/>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>상품코드</span>
                                    </div>
                                    <div
                                        className="col-span-3 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>상품명</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>이벤트명</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>공간<br/>대여</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>금액</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-1 flex justify-center items-center ">
                                        <span>수량</span>
                                    </div>
                                </div>
                                {/* table body */}
                                <div className="overflow-y-auto">
                                    <div className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                        <div
                                            className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <input type="checkbox"/>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <span>1234567890</span>
                                        </div>
                                        <div
                                            className="col-span-3 h-full p-2 flex items-center border-r border-gray-400">
                                            <span>부기 키링</span>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex items-center border-r border-gray-400">
                                            <span>이벤트명</span>
                                        </div>
                                        <div
                                            className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <span>필요</span>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex justify-end items-center border-r border-gray-400">
                                            <span>30000</span>
                                        </div>
                                        <div
                                            className="col-span-1 h-full p-1 flex justify-center items-center ">
                                            <input type="number" className="w-full text-center border border-black"/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                        <div
                                            className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <input type="checkbox"/>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <span>1234567890</span>
                                        </div>
                                        <div
                                            className="col-span-3 h-full p-2 flex items-center border-r border-gray-400">
                                            <span>부기 키링</span>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex items-center border-r border-gray-400">
                                            <span>이벤트명</span>
                                        </div>
                                        <div
                                            className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <span>필요</span>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex justify-end items-center border-r border-gray-400">
                                            <span>30000</span>
                                        </div>
                                        <div
                                            className="col-span-1 h-full p-1 flex justify-center items-center ">
                                            <input type="number" className="w-full text-center border border-black"/>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                        <div
                                            className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <input type="checkbox"/>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <span>1234567890</span>
                                        </div>
                                        <div
                                            className="col-span-3 h-full p-2 flex items-center border-r border-gray-400">
                                            <span>부기 키링</span>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex items-center border-r border-gray-400">
                                            <span>이벤트명</span>
                                        </div>
                                        <div
                                            className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                            <span>필요</span>
                                        </div>
                                        <div
                                            className="col-span-2 h-full p-2 flex justify-end items-center border-r border-gray-400">
                                            <span>30000</span>
                                        </div>
                                        <div
                                            className="col-span-1 h-full p-1 flex justify-center items-center ">
                                            <input type="number" className="w-full text-center border border-black"/>
                                        </div>
                                    </div>
                                </div>
                                {/* table footer */}
                                <div className="grid grid-cols-12 h-15 border-t border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 발주 신청 추가된 상품 목록 */}
                <div className="flex flex-col gap-3 w-1/2">
                    <div>
                        {/* 관리 메뉴 */}
                        <div
                            className="flex items-center gap-3 h-12 px-2 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold uppercase tracking-wider">
                            <button
                                className="p-2 border bg-gray-300 text-xs rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                전체 선택
                            </button>
                            <button
                                className="p-2 border bg-gray-300 text-xs rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                선택 삭제
                            </button>
                        </div>
                        <div className="min-w-full leading-normal">
                            {/* table header */}
                            <div className="grid grid-cols-12 h-16 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-3 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                    <span>상품코드</span>
                                </div>
                                <div
                                    className="col-span-3 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                    <span>상품명</span>
                                </div>
                                <div
                                    className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                    <span>이벤트명</span>
                                </div>
                                <div
                                    className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                    <span>공간<br/>대여</span>
                                </div>
                                <div
                                    className="col-span-1 h-full p-1 flex justify-center items-center border-r border-gray-400">
                                    <span>수량</span>
                                </div>
                                <div
                                    className="col-span-2 h-full p-2 flex justify-center items-center ">
                                    <span>금액</span>
                                </div>
                            </div>
                            {/* table body */}
                            <div className="overflow-y-auto">
                                <div className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <input type="checkbox"/>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>1234567890</span>
                                    </div>
                                    <div
                                        className="col-span-3 h-full p-2 flex items-center border-r border-gray-400">
                                        <span>부기 키링</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex items-center border-r border-gray-400">
                                        <span>이벤트명</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>필요</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-1 flex justify-center items-center border-r border-gray-400">
                                        <span>3</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-end items-center">
                                        <span>30000</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <input type="checkbox"/>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>1234567890</span>
                                    </div>
                                    <div
                                        className="col-span-3 h-full p-2 flex items-center border-r border-gray-400">
                                        <span>부기 키링</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex items-center border-r border-gray-400">
                                        <span>이벤트명</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>필요</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-1 flex justify-center items-center border-r border-gray-400">
                                        <span>3</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-end items-center">
                                        <span>30000</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <input type="checkbox"/>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>1234567890</span>
                                    </div>
                                    <div
                                        className="col-span-3 h-full p-2 flex items-center border-r border-gray-400">
                                        <span>부기 키링</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex items-center border-r border-gray-400">
                                        <span>이벤트명</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                        <span>필요</span>
                                    </div>
                                    <div
                                        className="col-span-1 h-full p-1 flex justify-center items-center border-r border-gray-400">
                                        <span>3</span>
                                    </div>
                                    <div
                                        className="col-span-2 h-full p-2 flex justify-end items-center">
                                        <span>30000</span>
                                    </div>
                                </div>
                            </div>
                            {/* table footer */}
                            <div
                                className="grid grid-cols-12 items-center border border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                                <div
                                    className="col-span-3 h-full p-2 flex justify-center items-center border-r border-gray-400 bg-gray-100">
                                    <span className="font-semibold">납기 날짜</span>
                                </div>
                                <div
                                    className="col-span-3 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                    <input type="date" className="border border-black w-full"/>
                                </div>
                                <div
                                    className="col-span-3 h-full p-2 flex justify-center items-center border-r border-gray-400 bg-gray-100">
                                    <span className="font-semibold">총 금액</span>
                                </div>
                                <div
                                    className="col-span-3 h-full p-2 flex justify-end items-center">
                                    <span>30000</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pl-4 py-3">
                            <button
                                className="p-2 border bg-gray-600 text-xs text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                발주 신청
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderApplyComponent;