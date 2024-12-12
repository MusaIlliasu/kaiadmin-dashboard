import { Bell, EnvelopeSimple, MagnifyingGlass, Stack } from "@phosphor-icons/react";
import profileImage from "../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="w-full flex justify-between items-center gap-4 text-sm">
        {/* Search */}
        <div>
            <input type="search"
                className="w-[200px] border-2 rounded-lg outline-none focus:border-secondary transition-colors py-2 pl-10 pr-4"
                placeholder="Search..."
            />
            <MagnifyingGlass size={24} color="#33333399" weight="regular" className="inline-block absolute top-2 left-3 z-10" />
        </div>

        <div className="flex justify-start items-center gap-4">
            <Link to="#" className="w-[50px] h-[45px] flex justify-center items-center transition-colors hover:bg-[#f1f1f1]">
                <EnvelopeSimple size={24} weight="regular" className="inline-block cursor-pointer" />
            </Link>

            <Link to="#" className="w-[50px] h-[45px] flex justify-center items-center transition-colors hover:bg-[#f1f1f1]">
                <Bell size={24} weight="regular" className="inline-block" />
                <span className="w-[20px] h-[20px] rounded-full bg-green-500 text-white text-xs flex justify-center items-center absolute -top-0 right-2 z-10">4</span>
            </Link>

            <Link to="#" className="w-[50px] h-[45px] flex justify-center items-center transition-colors hover:bg-[#f1f1f1]">
                <Stack size={24} weight="regular" className="inline-block cursor-pointer" />
            </Link>

            <div className="flex justify-start items-center gap-4 transition-colors hover:bg-[#f1f1f1] cursor-pointer py-1 px-2">
                <span className="inline-block w-[40px] h-[40px] rounded-full overflow-hidden">
                    <img src={profileImage} alt="Image" className="w-full h-full object-cover" />
                </span>

                <p className="font-semibold"><span className="text-[#33333388]">Hi,</span> Hizrian</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation;