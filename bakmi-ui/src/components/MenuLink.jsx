import Image from "next/image";

export default function MenuLink() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 w-full justify-evenly">
        <div className="flex justify-center gap-10 md:gap-16" data-aos="fade-up-right" data-aos-duration="1000" data-aos-once="true">
          <div className="flex flex-col items-center gap-3">
            <Image src="/icons/order.png" width={30} height={30} alt="order" />
            <p>Order</p>
          </div>
          <div className="flex flex-col items-center gap-3 ps-5">
            <Image src="/icons/redeem.png" width={30} height={30} alt="redeem" />
            <p>Redeem</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image src="/icons/voucher.png" width={30} height={30} alt="myvoucher" />
            <p>My Voucher</p>
          </div>
        </div>
        <div className="flex justify-center gap-10 md:gap-16" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
          <div className="flex flex-col items-center gap-3">
            <Image src="/icons/privilage.png" width={30} height={30} alt="privilage" />
            <p>Privilage</p>
          </div>
          <div className="flex flex-col items-center gap-3 ps-5">
            <Image src="/icons/calendar.png" width={30} height={30} alt="calender" />
            <p>History</p>
          </div>
          <div className="flex flex-col items-center gap-3 pe-4">
            <Image src="/icons/chat.png" width={30} height={30} alt="contact" />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </>
  );
}
