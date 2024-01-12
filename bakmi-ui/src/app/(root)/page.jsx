import Level from "@/components/Level";
import MenuLink from "@/components/MenuLink";
import Point from "@/components/Point";
import Privilage from "@/components/Privilage";
import Redeem from "@/components/Redeem";
import Refer from "@/components/Refer";

export default function Home() {
  return (
    <>
      <section className="wrapper flex flex-col gap-8 md:gap-10">
        <Level />
        <Point />
        <MenuLink />
        <Refer />
        <Redeem />
        <Privilage />
      </section>
    </>
  );
}
