import React from 'react';
import AsideMenuComponent from "../components/common/AsideMenuComponent.tsx";

function BasicLayout({children}: { children: React.ReactNode }) {


    return (
        <div className={`flex h-screen bg-gray-50 max-w-[120rem] m-auto`}>
            {/* Desktop sidebar */}
            <AsideMenuComponent></AsideMenuComponent>

            <div className="flex flex-col flex-1 w-full">
                <header className="z-10 py-4 bg-side-navy">
                    <div className="w-full flex justify-end px-6">
                        <span className="font-bold">해운대점 &nbsp;</span>
                        <span>점주님 안녕하세요.</span>
                    </div>
                </header>

                <main className="h-full overflow-y-auto">
                    <div className="container px-2 mx-auto grid m-1">
                        {children}
                    </div>
                </main>
            </div>
        </div>

    );
}

export default BasicLayout;