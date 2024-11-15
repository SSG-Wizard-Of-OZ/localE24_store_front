import React from 'react';
import BasicLayout from "../../layouts/MainLayout.tsx";
import {Outlet} from "react-router";

function EventIndex() {
    return (
        <BasicLayout>
            <div>
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default EventIndex;