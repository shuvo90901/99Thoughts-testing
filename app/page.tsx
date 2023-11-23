import Image from "next/image";
import LearnAndEarn from "./Components/HomePage/SSR/static/LearnAndEarn/LearnAndEarn";
import SlidingBlog from "./Components/HomePage/SSR/dynamic/SlidingBlog";
import { Suspense, lazy } from "react";
import RecentBlog from "./Components/HomePage/SSR/dynamic/RecentBlog/RecentBlog";
import NewsletterSubscribe from "./Components/HomePage/SSR/dynamic/NewsletterSubscribe.tsx/NewsletterSubscribe";
// import HomeSlider from "./Components/HomePage/CSR/HomeSlider/HomeSlider";
const HomeSlider = lazy(
  () => import("./Components/HomePage/CSR/HomeSlider/HomeSlider")
);

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeSlider />
        <LearnAndEarn />
        <SlidingBlog />
        <RecentBlog />
        <NewsletterSubscribe />
      </Suspense>
    </main>
  );
}
