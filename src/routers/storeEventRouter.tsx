import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import LoadingPage from "../pages/LoadingPage.tsx";


const Loading = <LoadingPage></LoadingPage>

const EventIndex = lazy(() => import("../pages/events/EventIndex.tsx"))
const EventListPage = lazy(() => import("../pages/events/EventListPage.tsx"))
const EventReadPage = lazy(() => import("../pages/events/EventReadPage.tsx"))
const StoreApplyPage = lazy(() => import("../pages/events/StoreApplyPage.tsx"))

const storeEventRouter={
    path: "/event",
    element: <Suspense fallback={Loading}><EventIndex/></Suspense>,
    children: [
        {
            path: "",
            element: <Navigate to={"list"} replace={true}></Navigate>
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}><EventListPage/></Suspense>
        },
        {
            path: "read",
            element: <Suspense fallback={Loading}><EventReadPage/></Suspense>
        },
        {
            path: "apply",
            element: <Suspense fallback={Loading}><StoreApplyPage/></Suspense>
        }
    ]
}

export default storeEventRouter