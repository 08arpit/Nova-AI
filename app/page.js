import Hero from "@/components/custom/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Hero />
    </div>
  );
}
