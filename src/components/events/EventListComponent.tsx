import {useNavigate} from "react-router";
import {getEventList} from "../../apis/eventAPI.ts";
import {IPageResponse} from "../../types/pageResponse.ts";
import {IEvent, IEventSearch} from "../../types/events.ts";
import {createSearchParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LoadingComponent from "../common/LoadingComponent.tsx";
import PageComponent from "../common/PageComponent.tsx";

const initialState: IPageResponse<IEvent> = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: {page: 1, size: 10,},
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    current: 1,
    totalPage: 0
};

const initialSearchParams: IEventSearch = {
    status: null,
    startDate: null,
    endDate: null,
    useSpace: null,
    keyword: null,
};

function EventListComponent() {

    const navigate = useNavigate();

    const [query] = useSearchParams();

    const page: number = Number(query.get("page")) || 1;
    const size: number = Number(query.get("size")) || 10;

    const [loading, setLoading] = useState<boolean>(false);
    const [pageResponse, setPageResponse] = useState<IPageResponse<IEvent>>(initialState);

    // 통합 상태 관리
    const [searchParams, setSearchParams] = useState<IEventSearch>(initialSearchParams);

    // 상태 업데이트 함수
    const updateSearchParam = <K extends keyof IEventSearch>(key: K, value: IEventSearch[K]) => {
        setSearchParams((prev) => ({
            ...prev,
            [key]: value, // 특정 키만 업데이트
        }));
    };

    const queryStr = createSearchParams({
        page: String(page),
        size: String(size),
        status: String(searchParams.status),
        startDate: String(searchParams.startDate),
        endDate: String(searchParams.endDate),
        useSpace: String(searchParams.useSpace),
        keyword: String(searchParams.keyword),
    });

    const handleClickSearch = () => {
        setLoading(true);
        if (searchParams?.keyword == ""){
            searchParams.keyword = null
        }
        getEventList(1, size,searchParams).then((data) => {
            setPageResponse(data);
            setTimeout(() => {
                setLoading(false);
            }, 600);
        });
    }

    const moveToRead = (eno:number) => {
        navigate({
            pathname: `/event/read/${eno}`,
            search:`${queryStr}`
        })
    }

    useEffect(() => {
        setLoading(true);
        getEventList(page, size, searchParams).then((data) => {
            setPageResponse(data);
            setTimeout(() => {
                setLoading(false);
            }, 600);
        });
    }, [page, size]);

    const ListDiv =
        Array.isArray(pageResponse.dtoList) && pageResponse.dtoList.length > 0 ? (
            pageResponse.dtoList.map((event:IEvent) => {
                const { eno, ename, startDate, endDate, useSpace, status} = event;
                const statusBgColor =
                    status === "PENDING" ? "bg-purple-200" :
                        status === "APPROVED" ? "bg-green-200" :
                            "bg-red-200";

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
                                          className={`absolute inset-0 opacity-50 rounded-full ${statusBgColor}`}></span>
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
                            value={searchParams.status ?? ""}
                            onChange={(e) => updateSearchParam("status", e.target.value || null)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">전체</option>
                            <option value="PENDING">대기중</option>
                            <option value="APPROVED">승인</option>
                            <option value="REJECTED">거절</option>
                        </select>
                    </div>

                    {/* 진행기간 */}
                    <div className="flex items-center gap-3">
                        <label className="text-gray-700 font-medium">진행기간</label>
                        <input
                            type="date"
                            value={searchParams.startDate ?? ""}
                            onChange={(e) => updateSearchParam("startDate", e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="text-gray-500">~</span>
                        <input
                            type="date"
                            value={searchParams.endDate ?? ""}
                            onChange={(e) => updateSearchParam("endDate", e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* 공간대여 여부 */}
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium">공간대여 여부</span>
                        <select
                            value={searchParams.useSpace ?? ""}
                            onChange={(e) => updateSearchParam("useSpace", e.target.value || null)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="">전체</option>
                            <option value="Y">필요</option>
                            <option value="N">불필요</option>
                        </select>
                    </div>

                    {/* 이벤트 이름 및 입력 */}
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label className="text-gray-700 font-medium">이벤트 이름</label>
                            <input
                                type="text"
                                value={searchParams.keyword ?? ""}
                                onChange={(e) => updateSearchParam("keyword", e.target.value)}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    {/* 검색 버튼 */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleClickSearch}
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