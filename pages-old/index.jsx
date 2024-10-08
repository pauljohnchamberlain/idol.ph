import React from "react";
import HowItWorks from "@/components/home/HowItWorks";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeCard from "@/components/home/HomeCard";
import mongoose from "mongoose";
import Creator from "@/model/Creator";
import Link from "next/link";

const index = ({ creator }) => {
  console.log(creator);
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-[#7042f88b] bg-white px-7 py-2 shadow-md transition-all Welcome-box">
          <p className="Welcome-text text-sm font-semibold cursor-pointer">
            idol is now public!
          </p>
        </div>
        <h1 className="max-w-6xl text-5xl h-14 font-bold md:text-6xl lg:text-5xl bg-gradient-to-l from-[#e73ade] to-[#f6517d] bg-clip-text text-transparent">
          Influencer Marketing Made Easy.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-400 sm: text-lg">
          Find and hire top Instagram, YouTube and Facebook influencers to
          create unique content for your brand
        </p>
      </MaxWidthWrapper>
      <div className="mt-20">

        {/* <div className='absolute -top-5 z-50 h-10 w-full [mask:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)] before:absolute before:inset-0 before:top-5 before:h-[1px] before:bg-gradient-to-r before:from-[#AE48FF] before:via-[#6C47FF] before:via-[25%] before:to-[#18CCFC] before:opacity-50 before:blur-[2px] after:absolute after:inset-0 after:left-1/2 after:top-5 after:h-[1px] after:w-3/4 after:-translate-x-1/2 after:bg-gradient-to-r after:from-[#AE48FF] after:via-[#6C47FF] after:via-[25%] after:to-[#18CCFC] after:[mask:linear-gradient(90deg,transparent,black,black,transparent)]' />
        <div className='absolute inset-0 isolate z-10 overflow-hidden before:absolute before:inset-0 before:bg-[url(/img/grid.svg)] before:[mask:radial-gradient(ellipse_farthest-side_at_50%_-25vw,black,transparent)] dark:before:opacity-10'>
          <div className='absolute left-1/2 top-0 h-12 w-1/2 -translate-x-1/2 -translate-y-3/4 rounded-[50%] bg-gradient-to-r from-[#AE48FF] via-[#6C47FF] via-[25%] to-[#18CCFC] opacity-20 blur-xl' />
        </div> */}
      </div>
      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div>
            <div className="mx-auto max-w-7xl px-6 my-4">
              <h1 className="text-xl font-semibold">Featured</h1>
              <p className="max-w-prose text-zinc-400">
                Hire top influencers across all platforms
              </p>
              <div className="mt-10 flow-root">
                <div className="m-2 justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 grid grid-cols-4">
                  {creator.slice(0, 4).map((item) => (
                    <Link key={item._id} href={`/creator/${item.username}`}>
                      <HomeCard
                        imageLink={item.profileImage}
                        platform={item.platforms.map(
                          (cur) => `${cur.platform}, `
                        )}
                        price={item.packages[0].price}
                        categories={[item.category]}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Instagram */}
            <div className="mx-auto max-w-7xl px-6 my-16">
              <h1 className="text-xl font-semibold">Instagram</h1>
              <p className="max-w-prose text-zinc-400">
                Hire Instagram influencers
              </p>
              <div className="mt-10 flow-root">
                <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {creator.slice(4, 8).map((item) => (
                    <Link key={item._id} href={`/creator/${item.username}`}>
                      <HomeCard
                        imageLink={item.profileImage}
                        platform={item.platforms.map(
                          (cur) => `${cur.platform}, `
                        )}
                        price={item.packages[0].price}
                        categories={[item.category]}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Youtube */}
            <div className="mx-auto max-w-7xl px-6 my-16">
              <h1 className="text-xl font-semibold">Youtube</h1>
              <p className="max-w-prose text-zinc-400">
                Hire Youtube influencers
              </p>
              <div className="mt-10 flow-root">
                <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {creator.slice(8, 12).map((item) => (
                    <Link key={item._id} href={`/creator/${item.username}`}>
                      <HomeCard
                        imageLink={item.profileImage}
                        platform={item.platforms.map(
                          (cur) => `${cur.platform}, `
                        )}
                        price={item.packages[0].price}
                        categories={[item.category]}
                      />
                    </Link>
                  ))}
                </div>
                <HowItWorks />
                {/* <Faq /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
export async function getServerSideProps({ params }) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  let creator = await Creator.find({});
  return {
    props: {
      creator: JSON.parse(JSON.stringify(creator)),
    },
  };
}
