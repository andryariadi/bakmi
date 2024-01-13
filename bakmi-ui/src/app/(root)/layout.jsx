import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-transparent">
      <Navbar />
      <main className="flex-1 mt-[86px]">{children}</main>
      <Footer />
    </div>
  );
}
