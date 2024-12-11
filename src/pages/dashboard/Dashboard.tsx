import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import SideNavigation from "./sideNav/SideNavigation";


const Dashboard = () => {

    return (
        <>
            {/* Header Navigation */}
            <div className="w-full h-[70px] md:w-[calc(100%-250px)] absolute top-0 left-0 md:left-[250px] bg-white py-2 px-4">
                <Navigation />
            </div>

            {/* Side Navigation */}
            <div className="w-[250px] h-screen hidden md:block bg-primary text-white overflow-y-auto">
                <SideNavigation />
            </div>

            {/* Main */}
            <div className="w-full md:w-[calc(100%-250px)] h-[calc(100vh-70px)] absolute top-[70px] left-0 md:left-[250px] overflow-y-auto p-4">
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard;