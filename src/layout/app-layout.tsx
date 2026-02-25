import { Outlet } from "react-router-dom"
// import { SideBar } from "./sidebar/Sidebar"
import { Header } from "./header"

export default function AppLayout() {
    return (
        <div className="flex h-screen bg-gray-300 overflow-hidden">
            {/* <SideBar /> */}
            <div className=" flex-1 flex flex-col">
                <Header />
                <main className="flex-1 px-30 w-full h-96">
                    <div className=" py-10 ">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}