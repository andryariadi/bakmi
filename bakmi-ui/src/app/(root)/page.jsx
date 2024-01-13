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
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10" data-aos="fade-up">
          <Level />
          <Point />
        </div>
        <MenuLink />
        <Refer />
        <Redeem />
        <Privilage />
        <Outlet />
      </section>
    </>
  );
}
