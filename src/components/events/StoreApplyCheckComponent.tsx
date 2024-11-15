function StoreApplyCheckComponent() {

    const moveToBack = () => {
        history.go(-1)
    }

    return (
        <div className="pt-20 pb-10 w-full mx-auto">
            <div className="flex flex-col gap-5">
                <div className="flex justify-center items-center border rounded-2xl p-10 bg-white shadow-md space-y-6 text-2xl">
                    이벤트 지점을 등록하신 (<span className="font-bold">&nbsp;해운대점&nbsp;</span>)은 현재 승인 대기중 입니다.
                </div>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={moveToBack}
                        className="flex-1 max-w-xs px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                        뒤로 가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StoreApplyCheckComponent;