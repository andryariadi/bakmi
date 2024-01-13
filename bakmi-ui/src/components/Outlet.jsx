import { locationAddress } from "@/data";
import Link from "next/link";
import { ImLocation2 } from "react-icons/im";

export default function Outlet() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-xl md:text-2xl font-bold">Outlet Location</h1>
            <p className="text-xs md:text-base">Explore your options</p>
          </div>
          <div className="font-bold text-sm md:text-xl text-amber-500 uppercase">
            <Link href="/">See All</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {locationAddress.map((loc) => (
            <div key={loc.id} className="flex flex-col gap-3 border-b-2 p-2 text-gray-400">
              <div>
                <h1 className="text-lg md:text-xl font-bold">{loc.title}</h1>
              </div>
              <div>
                <p>{loc.address}</p>
              </div>
              <div className="flex gap-5">
                <ImLocation2 size={24} />
                <p>{loc.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
