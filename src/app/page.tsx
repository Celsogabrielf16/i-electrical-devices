import LandingContent from "@/components/LandingContent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-poppins)]">
      <Navbar />
      <LandingContent />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
