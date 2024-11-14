import {useState} from "react";


function StoreApplyComponent() {

    const [contactNum, setContactNum] = useState('010-1234-5667');
    const [spaceRadio, setSpaceRadio] = useState<boolean>(true);

    const handleChange = (e) => {
        setContactNum(e.target.value);
    };

    const handleChangeRadio = () => {
        setSpaceRadio(!spaceRadio);
    }

    return (
        <div className="pt-20 pb-10 max-w-screen-xl mx-auto">

            <div className="border rounded-2xl p-10 bg-white shadow-md space-y-6">
                <h1>이벤트 지점 등록 신청</h1>

                <div>
                    <label htmlFor="creatorName" className="text-sm font-medium text-gray-700">지점명</label>
                    <p className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">해운대점</p>
                </div>

                <div>
                    <label htmlFor="businessNumber" className="text-sm font-medium text-gray-700">지점 연락처</label>
                    <input
                        type="text"
                        value={contactNum}
                        onChange={handleChange}
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">공간대여 가능 여부</label>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                            <input type="radio" id="radio1" name="radioTest" value="hosting-small"
                                   className="hidden peer" checked={spaceRadio} onChange={handleChangeRadio}/>
                            <label htmlFor="radio1"
                                   className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">가능</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="radio2" name="radioTest" value="hosting-big"
                                   className="hidden peer" checked={!spaceRadio} onChange={handleChangeRadio}/>
                            <label htmlFor="radio2"
                                   className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">불가능</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-gray-700">매장 사진 등록</label>
                    <input type="file" name="testfile" multiple={true}/>
                    <div
                        className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <span>이미지 파일</span>
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        className="flex-1 max-w-xs px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        등록 신청
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StoreApplyComponent;