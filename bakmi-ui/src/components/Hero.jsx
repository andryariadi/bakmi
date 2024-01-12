import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="h-dvh">
        <Image src="/images/hero.png" alt="hero" width={3000} height={1300} />
      </div>
    </>
  );
}
