import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Hello from "@/components/Hello";
import Work from "@/components/Work";
import Writing from "@/components/Writing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Hello />
      <Writing />
      <Explore />
      <Work />
      <Footer />
    </main>
  );
}
