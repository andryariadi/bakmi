import Image from "next/image";
import Link from "next/link";

export default function Refer() {
  return (
    <>
      <div className="relative bg-[url('/images/shape.svg')] h-[25dvh] md:h-[70dvh] w-full rounded-[10px] flex justify-center items-center">
        <div className="absolute w-[50%] h-full start-0 ">
          <Image src="/images/money.svg" alt="money" fill />
        </div>
        <div className="absolute w-[60%] end-0 flex flex-col gap-5 md:gap-10 pe-5 md:pe-20 text-end">
          <p className="text-white font-bold text-xs md:text-xl">Dapatkan 5 point dengan mengajak teman kamu</p>
          <div className="bg-white py-2 md:py-4 px-5 md:px-6 rounded-[5px] w-fit font-bold uppercase text-sm md:text-xl place-self-end">
            <Link href="/">Refer Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}
