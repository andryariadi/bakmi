import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper flex justify-between items-center flex-col sm:flex-row text-center gap-4 p-5">
          <Image src="/images/bakmi.png" alt="bakmi" width={100} height={38} />
          <p className="text-[#C73625] font-medium">AndryAriadi © 2024 Bakmi GM. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
