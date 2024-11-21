import {useNavigate} from "react-router";
import {getEventList} from "../../apis/eventAPI.ts";
import {IPageResponse} from "../../types/pageResponse.ts";
import {IEvent} from "../../types/events.ts";
import {createSearchParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";

const initialState: IPageResponse<IEvent> = {
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
};

function EventListComponent() {

    const navigate = useNavigate();

    const [query] = useSearchParams();

    const page: number = Number(query.get("page")) || 1;
    const size: number = Number(query.get("size")) || 10;

    const [loading, setLoading] = useState<boolean>(false);
    const [pageResponse, setPageResponse] = useState<IPageResponse<IEvent>>(initialState);
    const queryStr = createSearchParams({ page: String(page), size: String(size) });

    useEffect(() => {
        setLoading(true);
        getEventList(page, size).then((data) => {
            setPageResponse(data);
            setTimeout(() => {
                setLoading(false);
            }, 600);
        });
    }, [page, size]);


    const moveToRead = (eno:number) => {
        navigate({
            pathname: `/event/read/${eno}`,
            search:`${queryStr}`
        })
    }

    const ListDiv =
        Array.isArray(pageResponse.dtoList) && pageResponse.dtoList.length > 0 ? (
            pageResponse.dtoList.map((event:IEvent) => {
                const { eno,ename, startDate, endDate,useSpace , status} = event;

                return (
                    <div
                        onClick={() => {moveToRead(eno)}}
                        key={eno}
                        className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                        <div
                            className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                            <span>{eno}</span>
                        </div>
                        <div
                            className="col-span-4 h-full p-4 flex items-center border-r border-gray-400">
                            <span>{ename}</span>
                        </div>
                        <div
                            className="col-span-2 h-full p-3 flex justify-center items-center border-r border-gray-400">
                            <span>{startDate}</span>
                        </div>
                        <div
                            className="col-span-2 h-full p-3 flex justify-center items-center border-r border-gray-400">
                            <span>{endDate}</span>
                        </div>
                        <div
                            className="col-span-1 h-full p-3 flex justify-center items-center border-r border-gray-400">
                            <span>{useSpace?"필요":"불필요"}</span>
                        </div>
                        <div
                            className="col-span-1 h-full p-1 flex justify-center items-center ">
                            <button
                                className="relative inline-block px-3 py-1 font-semibold text-txt-grey leading-tight transition ease-in-out duration-200 focus:outline-none"
                            >
                                    <span aria-hidden
                                          className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></span>
                                <span className="relative">{status}</span>
                            </button>
                        </div>
                    </div>
                );
            })
        ) : (
            <div>데이터가 없습니다.</div>
        );


    return (
        <div className="py-8">
            {/* 검색 박스 */}
            <div className="mx-auto w-full px-4 sm:px-8 py-6 bg-white shadow-md rounded-lg">
                <div className="flex flex-col gap-5">

                    {/* 상태 셀렉트 박스 */}
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium">상태</span>
                        <select
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">전체</option>
                            {['대기중', '승인', '거절'].map((status, index) => (
                                <option key={index} value={index}>
                                    {status}
                                </option>
                            ))}
                        </select>
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

                    {/* 이벤트 이름 및 제작자 이름 입력 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="eventName" className="text-gray-700 font-medium">이벤트 이름</label>
                            <input
                                type="text"
                                id="eventName"
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="makerName" className="text-gray-700 font-medium">제작자 이름</label>
                            <input
                                type="text"
                                id="makerName"
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

            {loading && <LoadingComponent/>}

            {/*리스트 목록 시작*/}
            {/* grid table */}
            <div className="-mx-4 px-4">
                <div className="min-w-full leading-normal">
                    {/* table header */}
                    <div
                        className="grid grid-cols-12 h-15 border border-b-0 border-gray-400 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <div
                            className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                            <span>이벤트 번호</span>
                        </div>
                        <div
                            className="col-span-4 h-full p-2 flex justify-center items-center border-r border-gray-400">
                            <span>이벤트명</span>
                        </div>
                        <div
                                className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                            <span>시작일</span>
                        </div>
                        <div
                                className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                            <span>종료일</span>
                        </div>
                        <div
                            className="col-span-1 h-full p-2 flex gap-2 justify-center items-center border-r border-gray-400">
                            <span>공간대여</span>
                        </div>
                        <div
                            className="col-span-1 h-full p-2 flex gap-2 justify-center items-center">
                            <span>상태</span>
                        </div>
                    </div>
                    {/* table body */}
                    <div className="overflow-y-auto">
                        {ListDiv}
                    </div>
                    {/* table footer */}
                    <div
                        className="grid grid-cols-12 h-15 border-t border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                    </div>
                </div>
            </div>
            <PageComponent pageResponse={pageResponse}></PageComponent>
        </div>
    );
}

export default EventListComponent;