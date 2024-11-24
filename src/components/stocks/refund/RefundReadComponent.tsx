import LoadingComponent from "../../common/LoadingComponent.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getRefundList, postRefund} from "../../../apis/refundAPI.ts";
import {IRefundProducts} from "../../../types/refunds.ts";


const initialState:IRefundProducts[] = [{
    rfno: 0,
    rfdesc: '',
    regDate: '',
    status: ''
}]


function RefundReadComponent() {

    const {pno} = useParams();
    const [refundProducts, setRefundProducts] = useState<IRefundProducts[]>(initialState)
    const [description,setDescription] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [alertModal, setAlertModal] = useState<boolean>(false);

    const submitRefund = () => {
        setLoading(true);
        postRefund(Number(pno), description,).then((data) => {
            console.log(data)
            setTimeout(() => {
                setLoading(false)
                setAlertModal(true)
                setDescription("")
            }, 400);
        })
    }

    const moveToBack = () => {
        history.go(-1)
    }

    useEffect(() => {
        setLoading(true);
        getRefundList(Number(pno)).then((data) => {
            setRefundProducts(data)
            setTimeout(() => {
                setLoading(false);
            }, 600);
        });
    }, [pno,alertModal]);

    const RefundDivs = refundProducts.map(data => {
        const{rfno, regDate, status, rfdesc} = data

        return (
            <div
                key={rfno}
                className="grid grid-cols-12 border border-b-0 border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                <div
                    className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                    <span>{rfno}</span>
                </div>
                <div
                    className="col-span-4 h-full p-4 flex justify-center items-center border-r border-gray-400">
                    <span>{regDate}</span>
                </div>
                <div
                    className="col-span-2 h-full p-3 flex justify-center items-center border-r border-gray-400">
                    <span>{status}</span>
                </div>
                <div
                    className="col-span-4 h-full p-1 flex items-center ">
                    <span>{rfdesc}</span>
                </div>
            </div>
        )
    })

    const RefundModal = () => {
        return (
            <div
                className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50"
                onClick={() => setAlertModal(false)}
            >
                <div
                    className="bg-white rounded-lg p-8 shadow-lg w-80"
                    onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 모달 닫히지 않도록
                >
                    <h2 className="text-xl font-semibold text-center">반품 신청 완료</h2>
                    <p className="text-center mt-4">반품 신청이 성공적으로 완료되었습니다.</p>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setAlertModal(false)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="pt-5 pb-5 w-full mx-auto">
            {loading && <LoadingComponent/>}
            <div className="flex flex-col h-screen gap-2 border px-4 py-2 rounded-2xl bg-white shadow-md">
                <img onClick={moveToBack} src="/src/assets/img/icons/back.png" alt="뒤로 가기"
                     className="w-6 h-6 cursor-pointer"/>
                {/* 반품 신청 폼 */}
                <div className="mx-auto w-full px-4 py-6 bg-white border">
                    <div className="flex flex-col gap-5">
                        {/* 상품 번호 */}
                        <div className="flex items-center gap-4">
                            <label className="text-gray-700 font-medium">상품 번호</label>
                            <input
                                type="text"
                                value={pno}
                                readOnly={true}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* 지점 번호 */}
                        <div className="flex items-center gap-4">
                            <label className="text-gray-700 font-medium">지점 번호</label>
                            <input
                                type="text"
                                value="3"
                                readOnly={true}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* 반품 사유 */}
                        <div className="flex flex-col gap-4">
                            <label className="text-gray-700 font-medium">사유</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        {/* 신청 버튼 */}
                        <button
                            onClick={submitRefund}
                            className="self-end px-6 py-2 bg-gray-600 text-sm text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            신청
                        </button>
                    </div>
                </div>

                <div>
                    <span>반품 현황</span>
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
                                <span>신청번호</span>
                            </div>
                            <div
                                className="col-span-4 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                <span>신청일</span>
                            </div>
                            <div
                                className="col-span-2 h-full p-2 flex justify-center items-center border-r border-gray-400">
                                <span>상태</span>
                            </div>
                            <div
                                className="col-span-4 h-full p-2 flex gap-2 justify-center items-center">
                                <span>비고</span>
                            </div>
                        </div>
                        {/* table body */}
                        <div className="overflow-y-auto max-h-96">
                            {RefundDivs}
                        </div>
                        {/* table footer */}
                        <div
                            className="grid grid-cols-12 h-15 border-t border-gray-400 text-center text-xs text-gray-600 uppercase tracking-wider">
                        </div>
                    </div>
                </div>
            </div>
            {alertModal && <RefundModal/>}
        </div>
    );
}

export default RefundReadComponent;