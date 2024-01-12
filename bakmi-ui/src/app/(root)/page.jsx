import Level from "@/components/Level";
import Point from "@/components/Point";

export default function Home() {
  return (
    <>
      <section className="wrapper flex flex-col gap-8">
        <Level />
        <Point />
      </section>
    </>
  );
}
