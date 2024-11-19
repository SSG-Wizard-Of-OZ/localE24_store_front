import { Link } from 'react-router-dom';

function StoreLoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden p-8">
                <h1 className="text-3xl font-bold text-txt-grey text-center mb-6">관리자 로그인</h1>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <label className="flex items-center text-gray-600">
                                <input type="radio" name="remember" className="mr-2"/>
                                아이디 저장
                            </label>
                        </div>
                        <div className="flex space-x-3 text-blue-500 text-sm">
                            <p>아이디 찾기</p>
                            <p>비밀번호 찾기</p>
                        </div>
                    </div>
                    <Link
                        to='/main'
                        className="flex w-full bg-blue-500 hover:bg-blue-400 text-white py-3 px-5 rounded-md text-xl font-semibold transition-colors items-center justify-center">
                        로그인
                    </Link>

                </form>
            </div>
        </div>
    );
}

export default StoreLoginPage;