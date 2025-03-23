import Footer from "@/components/Footer";
import LandingContent from "@/components/LandingContent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen gap-16 font-[family-name:var(--font-poppins)]">
      <Navbar />
      <LandingContent />
      <Footer />
    </div>
  );
}
