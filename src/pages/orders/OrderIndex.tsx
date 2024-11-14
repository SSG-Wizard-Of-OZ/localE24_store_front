import {Outlet} from "react-router";
import BasicLayout from "../../layouts/MainLayout.tsx";
import React from "react";


function OrderIndex() {
    return (
        <BasicLayout>
            <div>
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default OrderIndex;