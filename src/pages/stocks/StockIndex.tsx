import BasicLayout from "../../layouts/MainLayout.tsx";
import {Outlet} from "react-router";
import React from "react";

function StockIndex() {
    return (
        <BasicLayout>
            <div>
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default StockIndex;