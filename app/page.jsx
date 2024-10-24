import MaxWidthWrapper from "../components/MaxWidthWrapper";
import HowItWorks from "../components/home/HowItWorks";
import HomeCard from "../components/home/HomeCard";
// import SellingPoints from "../components/home/SellingPoints";
// import JobsBoard from "../components/home/JobsBoard";
// import MediaKit from "../components/home/MediaKit";
// import CollabHub from "../components/home/CollabHub";
// import PitchLikeAPro from "../components/home/PitchLikeAPro";
// import Faqs from "../components/home/Faqs";
import Link from "next/link";
import dynamic from "next/dynamic";

const creators = [
  {
    _id: "1",
    username: "creator1",
    profileImage: "/sample-profile-image.jpeg",
    platforms: [{ platform: "Instagram" }, { platform: "YouTube" }],
    packages: [{ price: 100 }],
    category: "Lifestyle",
  },
  // Add more static creator data as needed
];

const SellingPoints = dynamic(() => import("@/components/home/SellingPoints"));
const JobsBoard = dynamic(() => import("@/components/home/JobsBoard"));
const MediaKit = dynamic(() => import("@/components/home/MediaKit"));
const CollabHub = dynamic(() => import("@/components/home/CollabHub"));
const PitchLikeAPro = dynamic(() => import("@/components/home/PitchLikeAPro"));
const Faqs = dynamic(() => import("@/components/home/Faqs"));

export default function HomePage() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#7042f88b] bg-white px-7 py-2 shadow-md transition-all Welcome-box">
          <p className="Welcome-text text-sm font-semibold cursor-pointer">
            idol is now public!
          </p>
        </div>
        <h1 className="max-w-6xl text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-l from-[#e73ade] to-[#f6517d] bg-clip-text text-transparent">
          Where Creators & Influencers Meet Brands.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-400 sm: text-lg">
          Find and hire top Instagram, Tiktok, YouTube and Facebook influencers
          to create unique content for your brand
        </p>
      </MaxWidthWrapper>

      {/* Rest of your code */}
      <div className="mt-20">{/* Additional content */}</div>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          <div>
            <div className="mx-auto max-w-7xl px-6 my-4">
              <h1 className="text-xl font-semibold">Featured</h1>
              <p className="max-w-prose text-zinc-400">
                Hire top influencers across all platforms
              </p>
              <div className="mt-10 flow-root">
                <div className="m-2 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {creators.slice(0, 4).map((item) => (
                    <Link key={item._id} href={`/creator/${item.username}`}>
                      <HomeCard
                        imageLink={item.profileImage}
                        platform={item.platforms
                          .map((cur) => cur.platform)
                          .join(", ")}
                        price={item.packages[0].price}
                        categories={[item.category]}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Instagram Section */}
            <div className="mx-auto max-w-7xl px-6 my-16">
              <h1 className="text-xl font-semibold">Instagram</h1>
              <p className="max-w-prose text-zinc-400">
                Hire Instagram influencers
              </p>
              <div className="mt-10 flow-root">
                <div className="m-2 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {creators.slice(4, 8).map((item) => (
                    <Link key={item._id} href={`/creator/${item.username}`}>
                      <HomeCard
                        imageLink={item.profileImage}
                        platform={item.platforms
                          .map((cur) => cur.platform)
                          .join(", ")}
                        price={item.packages[0].price}
                        categories={[item.category]}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* YouTube Section */}
            <div className="mx-auto max-w-7xl px-6 my-16">
              <h1 className="text-xl font-semibold">YouTube</h1>
              <p className="max-w-prose text-zinc-400">
                Hire YouTube influencers
              </p>
              <div className="mt-10 flow-root">
                <div className="m-2 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {creators.slice(8, 12).map((item) => (
                    <Link key={item._id} href={`/creator/${item.username}`}>
                      <HomeCard
                        imageLink={item.profileImage}
                        platform={item.platforms
                          .map((cur) => cur.platform)
                          .join(", ")}
                        price={item.packages[0].price}
                        categories={[item.category]}
                      />
                    </Link>
                  ))}
                </div>
              </div>
              <HowItWorks />
              {/* <Faq /> */}
              <SellingPoints />
              <JobsBoard />
              <MediaKit />
              <CollabHub />
              <PitchLikeAPro />
              <Faqs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
