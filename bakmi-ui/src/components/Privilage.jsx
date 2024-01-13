import { privilageMenu } from "@/data";
import Image from "next/image";

export default function Privilage() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-[2px]" data-aos="fade-up-right" data-aos-duration="1000" data-aos-once="true">
          <h1 className="text-xl md:text-2xl font-bold">Privilages</h1>
          <p className="text-xs md:text-base">Keep discovering our promo and news</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          {privilageMenu.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 md:gap-5 shadow-md rounded-[10px]">
              <div>
                <Image src={item.imgUrl} alt={item.title} width={400} height={400} className="rounded-t-[10px] shadow-lg" />
              </div>
              <div className="flex flex-col gap-3 p-2 md:p-5">
                <h1 className="font-bold text-sm md:text-xl">{item.title}</h1>
                <p className="font-bold text-xs md:text-base text-gray-300">Exp. 31 Dec 2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
