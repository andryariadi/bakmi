import Link from "next/link";

export default function Point() {
  return (
    <>
      <div className="shadow-md py-5 px-5 md:px-10 flex flex-col gap-1">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg md:text-2xl">Bakmi GM Points</h1>
          <p className="font-bold text-lg md:text-2xl">40</p>
        </div>
        <div>
          <p className="text-gray-500 text-[11px] md:text-lg font-medium">
            <span className="font-bold">40</span> will expire on <span className="font-bold">22 Feb 2024</span>.{" "}
            <Link href="/" className="font-bold text-sky-500 cursor-pointer">
              See Deails
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
