import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import FeaturedBlogSection from "@/components/sections/FeaturedBlogSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <FeaturedBlogSection />
    </>
  );
}
