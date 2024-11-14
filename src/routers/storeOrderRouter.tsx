import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import LoadingPage from "../pages/LoadingPage.tsx";

const Loading = <LoadingPage></LoadingPage>

const OrderIndex = lazy(() => import("../pages/orders/OrderIndex.tsx"))
const OrderListPage = lazy(() => import("../pages/orders/OrderListPage.tsx"))
const OrderReadPage = lazy(() => import("../pages/orders/OrderReadPage.tsx"))
const OrderApplyPage = lazy(() => import("../pages/orders/OrderApplyPage.tsx"))

const storeOrderRouter= {
    path: "/order",
    element: <Suspense fallback={Loading}><OrderIndex/></Suspense>,
    children: [
        {
            path: "",
            element: <Navigate to={"list"} replace={true}></Navigate>
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><OrderListPage/></Suspense>
        },
        {
            path: "read",
            element: <Suspense fallback={Loading}><OrderReadPage/></Suspense>
        },
        {
            path: "apply",
            element: <Suspense fallback={Loading}><OrderApplyPage/></Suspense>
        }
    ]
}

export default storeOrderRouter