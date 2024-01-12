import { MdLockOutline } from "react-icons/md";
import { RiVipCrown2Line } from "react-icons/ri";
import SliderComp from "./Slider";

export default function Level() {
  return (
    <>
      <div className="shadow-md py-5 px-5 md:px-10 gap-10">
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-2xl font-bold">Your Level</h1>
          <h1 className="text-lg md:text-2xl uppercase font-bold text-orange-500">Learn More</h1>
        </div>
        <div className="flex justify-center py-8 gap-8 md:gap-20">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-gray-400 text-white rounded-full p-2">
              <RiVipCrown2Line size={23} />
            </div>
            <p className="font-bold">Silver</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-amber-200 text-white rounded-full p-2">
              <MdLockOutline size={23} />
            </div>
            <p className="font-bold text-gray-400">Gold</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-gray-300 text-white rounded-full p-2">
              <MdLockOutline size={23} />
            </div>
            <p className="font-bold text-gray-400">Platinum</p>
          </div>
        </div>
        <div className="pb-8">
          <SliderComp />
        </div>
        <div>
          <p className="text-[11px] md:text-lg font-medium">
            Spend <span className="font-bold">3,500,001</span> by <span className="font-bold">23 Nov 2024</span> to reach <span className="font-bold">Gold</span>
          </p>
        </div>
      </div>
    </>
  );
}
