import LoadingPage from "../pages/LoadingPage.tsx";
import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";


const Loading = <LoadingPage></LoadingPage>

const StockIndex = lazy(() => import("../pages/stocks/StockIndex.tsx"))
const StockListPage = lazy(() => import("../pages/stocks/StockListPage.tsx"))
const RefundIndex = lazy(() => import("../pages/stocks/refund/RefundIndex"))
const RefundListPage = lazy(() => import("../pages/stocks/refund/RefundListPage"))
const RefundReadPage = lazy(() => import("../pages/stocks/refund/RefundReadPage"))

const storeStockRouter = {
    path: '/stock',
    element: <Suspense fallback={Loading}><StockIndex/></Suspense>,
    children:[
        {
            path:"",
            element: <Navigate to={"list"} replace={true}></Navigate>
        },
        {
            path:"list",
            element: <Suspense fallback={Loading}><StockListPage/></Suspense>
        },
        {
            path: "refund",
            element: <Suspense fallback={Loading}><RefundIndex/></Suspense>,
            children: [
                {
                    path:"",
                    element: <Navigate to={"list"} replace={true}></Navigate>
                },
                {
                    path:"list",
                    element: <Suspense fallback={Loading}><RefundListPage/></Suspense>
                },
                {
                    path:"read",
                    element: <Suspense fallback={Loading}><RefundReadPage/></Suspense>
                },
            ]
        }
    ]
}

export default storeStockRouter;