import BasicLayout from "../../layouts/MainLayout.tsx";
import {Outlet} from "react-router";

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