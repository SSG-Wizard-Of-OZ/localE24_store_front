import {Link} from "react-router-dom";
import Depth1Menu from "./Depth1Menu.tsx";

import logo from "../../assets/img/logo.png"

interface subMenusProps{
    name: string,
    toPath:string
}

interface Depth1MenuProps {
    mainName:string,
    subMenus:subMenusProps[],
    basicPath:string,
    iconName:string
}

function AsideMenuComponent() {

    const m1:Depth1MenuProps = {
        mainName:"이벤트 관리",
        subMenus:[
            {name:"이벤트지점 등록 신청",toPath:"/apply"},
            {name:"이벤트 목록",toPath:"/list"},
        ],
        basicPath:"/event",
        iconName: "edit.png"
    }
    const m2:Depth1MenuProps = {
        mainName:"발주 관리",
        subMenus:[
            {name:"발주 신청",toPath:"/apply"},
            {name:"발주 현황 목록",toPath:"/list"},
        ],
        basicPath:"/order",
        iconName: "product.png"
    }
    const m3:Depth1MenuProps = {
        mainName:"재고 관리",
        subMenus:[
            {name:"재고 목록",toPath:"/list"}
        ],
        basicPath:"/stock",
        iconName: "stats.png"
    }

    return (
        <aside className="z-20 hidden w-64 overflow-y-auto bg-side-navy md:block flex-shrink-0">
            <div className="py-4 text-neutral-800">

                {/* 로고 부분 */}
                <Link to="/main" className="flex items-center justify-center mb-4 p-2">
                       <img src={logo} alt='/logo' className='px-16'/>
                </Link>

                {/* 1Depth 메뉴 */}
                <ul className="mt-6 space-y-2 text-txt-grey">
                    <Depth1Menu {...m1}></Depth1Menu>
                    <Depth1Menu {...m2} ></Depth1Menu>
                    <Depth1Menu {...m3} ></Depth1Menu>
                </ul>
            </div>
        </aside>
    );
}

export default AsideMenuComponent;