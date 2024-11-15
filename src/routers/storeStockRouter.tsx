import LoadingPage from "../pages/LoadingPage.tsx";
import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";


const Loading = <LoadingPage></LoadingPage>

const StockIndex = lazy(() => import("../pages/stocks/StockIndex.tsx"))
const StockListPage = lazy(() => import("../pages/stocks/StockListPage.tsx"))
const StockReadPage = lazy(() => import("../pages/stocks/StockReadPage.tsx"))

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
            path:"read",
            element: <Suspense fallback={Loading}><StockReadPage/></Suspense>
        }
    ]
}

export default storeStockRouter;