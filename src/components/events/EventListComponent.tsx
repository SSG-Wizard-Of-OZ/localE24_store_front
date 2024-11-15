import {useNavigate} from "react-router";
import {useState} from "react";

function EventListComponent() {

    const navigate = useNavigate();
    const [eventName, setEventName] = useState('이벤트1');
    const [makerName, setMakerName] = useState('홍길동');


    const moveToRead = () => {
        navigate({
            pathname: `/event/read`,
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

                    {/* 상태 셀렉트 박스 */}
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium">상태</span>
                        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">전체</option>
                            {['대기중', '승인', '거절', '진행예정', '진행중', '종료'].map((status, index) => (
                                <option key={index} value={index}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 이벤트 이름 및 제작자 이름 입력 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="eventName" className="text-gray-700 font-medium">이벤트 이름</label>
                            <input
                                type="text"
                                id="eventName"
                                value={eventName}
                                onChange={handleChangeEventName}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="makerName" className="text-gray-700 font-medium">제작자 이름</label>
                            <input
                                type="text"
                                id="makerName"
                                value={makerName}
                                onChange={handleChangeMakerName}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* 진행기간 */}
                    <div className="flex items-center gap-3">
                        <label className="text-gray-700 font-medium">진행기간</label>
                        <input
                            type="date"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="text-gray-500">~</span>
                        <input
                            type="date"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* 공간대여 여부 */}
                    <div className="flex items-center gap-3">
                        <label className="text-gray-700 font-medium">공간대여 가능 여부</label>
                        <ul className="flex gap-2">
                            <li>
                                <input type="radio" id="space1" name="spaceAvailability" className="hidden peer"/>
                                <label htmlFor="space1"
                                       className="inline-flex items-center p-2 text-gray-600 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 peer-checked:bg-blue-100 peer-checked:border-blue-500 peer-checked:text-blue-600">
                                    <span className="text-sm font-medium">필요</span>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="space2" name="spaceAvailability" className="hidden peer"/>
                                <label htmlFor="space2"
                                       className="inline-flex items-center p-2 text-gray-600 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200 peer-checked:bg-blue-100 peer-checked:border-blue-500 peer-checked:text-blue-600">
                                    <span className="text-sm font-medium">불필요</span>
                                </label>
                            </li>
                        </ul>
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
                                이벤트 이름
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                공간 대여
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                시작 날짜
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                종료 날짜
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                제작자
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                상태
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr onClick={moveToRead}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                부기와 함께하는 부산
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">필요</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">홍길동</p>
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
                                부기와 함께하는 부산
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">필요</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">2024-10-15</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <p className="text-gray-900 whitespace-no-wrap dark:text-gray-300">홍길동</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <button
                                        className="relative inline-block px-3 py-1 font-semibold text-txt-grey leading-tight transition ease-in-out duration-200 focus:outline-none"
                                    >
                                                <span aria-hidden
                                                      className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                                        <span className="relative">진행예정</span>
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

export default EventListComponent;