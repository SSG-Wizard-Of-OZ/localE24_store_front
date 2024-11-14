import {lazy, Suspense} from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import storeEventRouter from "./storeEventRouter.tsx";
import storeOrderRouter from "./storeOrderRouter.tsx";


const LoadingPage = lazy(() => import("../pages/LoadingPage.tsx"))
const StoreLoginPage = lazy(() => import("../pages/StoreLoginPage.tsx"))
const StoreMainPage = lazy(() => import("../pages/StoreMainPage.tsx"))



export const Loading = <LoadingPage></LoadingPage>

const storeMainRouter = createBrowserRouter([
    {
        path: "/main",
        element: <Suspense fallback={Loading}><StoreMainPage/></Suspense>
    },
    {
        path: "/",
        element: <Navigate to="login" replace={true}></Navigate>
    },
    {
        path: "/login",
        element: <Suspense fallback={Loading}><StoreLoginPage/></Suspense>
    },
    storeEventRouter,
    storeOrderRouter
])

export default storeMainRouter;
