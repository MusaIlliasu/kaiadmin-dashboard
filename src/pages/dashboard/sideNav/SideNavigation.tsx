import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { Calculator, HandCoins, HouseLine, Invoice } from "@phosphor-icons/react";

const SideNavigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Link to="/" className="block w-[180px] p-4 mb-6">
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </Link>

      <Link to="/dashboard" className={`w-full flex justify-start items-center gap-2 pl-4 pr-4 py-2 border-l-4 ${pathname === "/dashboard" ? "border-l-purple-600 text-purple-600" : "border-l-transparent"} transition-colors mb-5`}>
        <HouseLine size={24} weight="regular" />
        <span className="text-white">Dashboard</span>
      </Link>

      <Link to="metering" className={`w-full flex justify-start items-center gap-2 pl-4 pr-4 py-2 border-l-4 ${pathname.startsWith("/dashboard/metering") ? "border-l-purple-600 text-purple-600" : "border-l-transparent"} transition-colors mb-5`}>
        <Calculator size={24} weight="regular" />
        <span className="text-white">Metering</span>
      </Link>

      <Link to="taxing" className={`w-full flex justify-start items-center gap-2 pl-4 pr-4 py-2 border-l-4 ${pathname.startsWith("/dashboard/taxing") ? "border-l-purple-600 text-purple-600" : "border-l-transparent"} transition-colors mb-5`}>
        <HandCoins size={24} weight="regular" />
        <span className="text-white">Taxing</span>
      </Link>

      <Link to="billing" className={`w-full flex justify-start items-center gap-2 pl-4 pr-4 py-2 border-l-4 ${pathname.startsWith("/dashboard/billing") ? "border-l-purple-600 text-purple-600" : "border-l-transparent"} transition-colors mb-5`}>
        <Invoice size={24} weight="regular" />
        <span className="text-white">Billing</span>
      </Link>
    </>
  )
}

export default SideNavigation;