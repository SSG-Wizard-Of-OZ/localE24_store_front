import {getEventOne, putEventStatus} from "../../apis/eventAPI.ts";
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {getProductsByEvent} from "../../apis/productAPI.ts";
import {IEvent} from "../../types/events.ts";
import {IProduct} from "../../types/products.ts";
import LoadingComponent from "../common/LoadingComponent.tsx";
import {useSearchParams} from "react-router-dom";

const initialEvent:IEvent = {
    eno: 0,
    ename: '',
    endDate: '',
    startDate: '',
    status: '',
    useSpace: false
};
const initialProducts:IProduct[] = [{
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    fileNames: []
}];


function EventReadComponent() {

    const {eno} = useParams();
    const [loading, setLoading] = useState<boolean>(false);

    const [query] = useSearchParams();
    const navigate = useNavigate();
    const queryStr = new URLSearchParams(query).toString();

    const [event, setEvent] = useState<IEvent>(initialEvent)
    const [products, setProducts] = useState<IProduct[]>(initialProducts)
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [actionType, setActionType] = useState<"approve" | "reject" | null>(null);
    const [rejectReason, setRejectReason] = useState<string>("");


    useEffect(() => {
        setLoading(true);
        getEventOne(Number(eno)).then((data) => {
            setEvent(data);
            getProductsByEvent(Number(eno)).then(data => {
                setProducts(data)
            });
            setTimeout(() => {
                setLoading(false);
            }, 600);
        });
    },[eno])

    const moveToBack = () => {
        history.go(-1)
    }

    const handleApprove = () => {
        setActionType("approve");
        setModalOpen(true);
    };

    const handleReject = () => {
        setActionType("reject");
        setModalOpen(true);
    };

    const handleSubmit = () => {
        const status = actionType === "approve" ? 1 : 2;
        putEventStatus(Number(eno),status).then(data => {
            console.log(data)
            navigate({
                pathname: `/event/list`,
                search: `?${queryStr}`
            })
        })
        setModalOpen(false);

    };

    const productDivs = products.map(product => {
        const {pno, pname, price, pdesc, fileNames} = product;

        const fileLis = fileNames.map((fileName,index) => {
            return (
                <li key={index} className="flex gap-4">
                    <div className="w-52">
                        {/*<img className="rounded-md" src="/src/assets/img/food/M28.jpeg" alt="img1"/>*/}
                        {fileName}
                    </div>
                </li>
            )
        })

        return (
            <div key={pno} className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div>
                            <span>상품번호:</span>
                            <span>{pno}</span>
                            <span>상품명:</span>
                            <span>{pname}</span>
                            <span>가격:</span>
                            <span>{price}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>상품 설명</span>
                        <span>{pdesc}</span>
                    </div>
                </div>
                <ul className="flex gap-3">
                    {fileLis}
                </ul>
            </div>
        )
    });

    return (
        <div className="pt-5 pb-5 w-full mx-auto">

            {loading && <LoadingComponent/>}

            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <img onClick={moveToBack} src="/src/assets/img/icons/back.png" alt="뒤로 가기"
                     className="w-6 h-6 cursor-pointer"/>

                <div>
                    <span className="text-lg font-medium text-gray-700">이벤트 번호</span>
                    <p className="mt-1 w-full px-3 py-2 border rounded-md">{event.eno}</p>
                </div>

                <div>
                    <span className="text-lg font-medium text-gray-700">이벤트명</span>
                    <p className="mt-1 w-full px-3 py-2 border rounded-md">{event.ename}</p>
                </div>
                <div>
                    <label className="text-lg font-medium text-gray-700">진행기간</label>
                    <div className="flex space-x-2 mt-1 gap-2">
                        <span className="px-5 py-2 border rounded-md">{event.startDate}</span>
                        <span className="flex items-center">~</span>
                        <span className="px-5 py-2 border rounded-md">{event.endDate}</span>
                    </div>
                </div>
                <div>
                    <span className="text-lg font-medium text-gray-700">공간대여 필요 여부</span>
                    <p className="max-w-fit mt-1 px-3 py-2 border rounded-md">{event.useSpace?"필요":"불필요"}</p>
                </div>
                <div>
                    <span className="text-lg font-medium text-gray-700">상태</span>
                    <p className="max-w-fit mt-1 px-3 py-2 border rounded-md">{event.status}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-lg font-medium text-gray-700">상품 리스트</span>
                    {productDivs}
                </div>


                <div className="flex gap-4 justify-center">
                    <button
                        onClick={handleApprove}
                        className="flex-1 max-w-xs px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        허가
                    </button>
                    <button
                        onClick={handleReject}
                        className="flex-1 max-w-xs px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        반려
                    </button>
                </div>
            </div>

            {/* 모달 */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                        <h2 className="text-lg font-bold mb-4 text-center">
                            {actionType === "approve" ? "허가 확인" : "반려 사유 입력"}
                        </h2>
                        {actionType === "reject" && (
                            <textarea
                                className="w-full h-20 p-2 border rounded-md"
                                placeholder="반려 사유를 입력하세요"
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                            />
                        )}
                        {/*// {event.status === "PENDING" && (*/}
                            <div className="flex gap-4 mt-6 justify-center">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    onClick={handleSubmit}
                                >
                                    완료
                                </button>
                                <button
                                    className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                                    onClick={() => setModalOpen(false)}
                                >
                                    취소
                                </button>
                            </div>
                        {/*// )}*/}
                    </div>
                </div>
            )}
        </div>
    );
}

export default EventReadComponent;