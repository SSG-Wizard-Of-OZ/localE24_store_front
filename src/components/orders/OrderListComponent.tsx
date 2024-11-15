import {useNavigate} from "react-router";
import {useState} from "react";


function OrderListComponent() {
    const navigate = useNavigate();
    const [eventName, setEventName] = useState('이벤트1');
    const [makerName, setMakerName] = useState('홍길동');


    const moveToRead = () => {
        navigate({
            pathname: `/order/read`,
            // search:`${queryStr}`
        })
    }

    const handleChangeMakerName = (e) => {
        setMakerName(e.target.value);
    };

    const handleChangeEventName = (e) => {
        setEventName(e.target.value);
    }

    return (
        <div className="py-8">
            {/* 검색 박스 */}
            <div className="mx-auto w-full px-4 sm:px-8 py-6 bg-white shadow-md rounded-lg">
                <div className="flex flex-col gap-5">

                    {/* 상태 셀렉트박스 */}
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium">상태</span>
                        <select
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">전체</option>
                            {['대기중', '수주완료', '발주완료'].map((status, index) => (
                                <option key={index} value={index}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 발주 명 및 발주 코드 입력 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="eventName" className="text-gray-700 font-medium">발주명</label>
                            <input
                                type="text"
                                id="eventName"
                                value={eventName}
                                onChange={handleChangeEventName}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="makerName" className="text-gray-700 font-medium">발주 코드</label>
                            <input
                                type="text"
                                id="makerName"
                                value={makerName}
                                onChange={handleChangeMakerName}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* 발주 신청날짜 및 납기 날짜 */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                            <label className="text-gray-700 font-medium">발주 신청 날짜</label>
                            <input
                                type="date"
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="text-gray-700 font-medium">납기 날짜</label>
                            <input
                                type="date"
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* 검색 버튼 */}
                    <div className="flex justify-end">
                        <button
                            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            검색
                        </button>
                    </div>
                </div>
            </div>


            {/*리스트 목록 시작*/}
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                발주 코드
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                발주명
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                발주 날짜
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                납기 날짜
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                상태
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr onClick={moveToRead}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">1234567890</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">부기와 함께하는 부산
                                    2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-25</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="relative inline-block px-3 py-1 font-semibold text-txt-grey leading-tight transition ease-in-out duration-200 focus:outline-none"
                                    >
                                                <span aria-hidden
                                                      className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                                        <span className="relative">대기중</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr onClick={moveToRead}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">1234567890</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">부기와 함께하는 부산
                                    2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-25</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="relative inline-block px-3 py-1 font-semibold text-txt-grey leading-tight transition ease-in-out duration-200 focus:outline-none"
                                    >
                                                <span aria-hidden
                                                      className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                                        <span className="relative">대기중</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderListComponent;