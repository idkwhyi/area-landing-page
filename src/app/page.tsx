import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen bg-white">
        <Navbar/>
        <br/>
        <Hero/>
        <div className="w-40 h-40 bg-greenbackground">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
        <div className="w-40 h-40 bg-red-200">TEST</div>
    </div>
  );
}
