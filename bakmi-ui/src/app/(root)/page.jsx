import Hero from "@/components/Hero";
import Level from "@/components/Level";
import MenuLink from "@/components/MenuLink";
import Outlet from "@/components/Outlet";
import Point from "@/components/Point";
import Privilage from "@/components/Privilage";
import Redeem from "@/components/Redeem";
import Refer from "@/components/Refer";

export default function Home() {
  return (
    <>
      <section className="wrapper flex flex-col gap-8 md:gap-10">
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <Hero />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10">
          <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-once="true">
            <Level />
          </div>
          <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <Point />
          </div>
        </div>
        <MenuLink />
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <Refer />
        </div>
        <Redeem />
        <Privilage />
        <Outlet />
      </section>
    </>
  );
}
