import Level from "@/components/Level";
import MenuLink from "@/components/MenuLink";
import Point from "@/components/Point";

export default function Home() {
  return (
    <>
      <section className="wrapper flex flex-col gap-8 md:gap-10">
        <Level />
        <Point />
        <MenuLink />
      </section>
    </>
  );
}
