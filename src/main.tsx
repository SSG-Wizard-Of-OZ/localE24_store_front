import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import storeMainRouter from "./routers/storeMainRouter.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={storeMainRouter}></RouterProvider>
)
