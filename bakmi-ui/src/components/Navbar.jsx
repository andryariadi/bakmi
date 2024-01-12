import Image from "next/image";
import { LuMailMinus } from "react-icons/lu";
import { MdOutlineQrCode2 } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      <nav className="w-full fixed z-10 shadow-md bg-white">
        <div className="wrapper flex justify-between items-center">
          <div>
            <Image src="/images/bakmi.png" width={200} height={200} alt="bakmi" />
          </div>
          <div className="flex gap-5 md:gap-10">
            <MdOutlineQrCode2 size={30} />
            <LuMailMinus size={30} />
            <BiDotsVerticalRounded size={30} />
          </div>
        </div>
      </nav>
    </>
  );
}
