import { SearchInfluencer } from "@/components/SearchInfluencer";
import HomeCard from "@/components/home/HomeCard";
import React from "react";

const index = () => {
  return (
    <section className="min-h-screen pt-10 flex flex-col gap-y-10">
      <SearchInfluencer />
      <div className="mx-auto max-w-7xl px-6 my-4">
        <h1 className="text-xl font-semibold">Featured</h1>
        <p className="max-w-prose text-zinc-400">
          Hire top influencers across all platforms
        </p>
        <div className="mt-10 flow-root">
          <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Kabita-Singh-one-of-the-leading-Indian-Instagram-influencers-shares-her-easy-going-homemade-recipes-with-her-857K-large-family-on-Instagram..png"
              }
              platform={"Instagram"}
              price={8500}
              categories={["Cooking", "Humor", "Lifestyle", "Fun"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Siddhartha-Joshi-is-one-of-the-best-Indian-Instagram-influencers-with-adventurous-travelogues-and-beautiful-trip-clicks..png"
              }
              platform={"Youtube"}
              price={500}
              categories={["Professional Mermaid", "Zoologist", "Entrepreneur"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Ankush-Bahuguna-one-of-the-most-famous-young-influencers-in-India-known-for-his-funny-satires-and-roasts..png"
              }
              platform={"Youtube"}
              price={2500}
              categories={["Fashion", "Travel", "Lifestyle Content Creator"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Aashna-Shroff-a-leading-Indian-fashion-and-lifestyle-influencer-with-a-918K-follower-count-on-Instagram.png"
              }
              platform={"Instagram"}
              price={1600}
              categories={[
                "Entrepreneur",
                "Business Owner & Lifestyle Content",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 my-16">
        <h1 className="text-xl font-semibold">Instagram</h1>
        <p className="max-w-prose text-zinc-400">Hire Instagram influencers</p>
        <div className="mt-10 flow-root">
          <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Sahil-Khan-a-leading-health-and-fitness-influencer-in-India-with-a-family-of-10.4M-on-Instagram.png"
              }
              platform={"Instagram"}
              price={1800}
              categories={["Cooking", "Humor", "Lifestyle", "Fun"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Bani-J-a-popular-name-amongst-the-young-influencers-in-India-has-a-following-of-about-1.5M-on-Instagram..png"
              }
              platform={"Instagram"}
              price={5600}
              categories={["Fitness", "Gym", "Healthy Lifestyle"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Sonali-Swami-one-of-the-top-Instagram-influencers-in-India-with-a-326K-following-that-loves-her-determination-and-idolizes-her-passion-for-fitness..png"
              }
              platform={"Instagram"}
              price={3200}
              categories={["Fashion", "Gym", "Fitness Content Creator"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Deepa-Khosla-is-one-of-the-leading-Indian-influencers-in-USA-who-is-known-for-her-fashion-tips-and-the-latest-style-updates.png"
              }
              platform={"Instagram"}
              price={1200}
              categories={["Fashion", "Entrepreneur", "Lifestyle Content"]}
            />
          </div>
        </div>
      </div>
      {/* Youtube */}
      <div className="mx-auto max-w-7xl px-6 my-16">
        <h1 className="text-xl font-semibold">Youtube</h1>
        <p className="max-w-prose text-zinc-400">Hire Youtube influencers</p>
        <div className="mt-10 flow-root">
          <div className="m-2 flex flex-row justify-evenly gap-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Ganesh-Vanare-is-an-Indian-Instagram-influencer-who-loves-seeing-new-places-and-vlogs-it-for-his-506K-followers-on-Instagram-to-enjoy-as-well..png"
              }
              platform={"Youtube"}
              price={3000}
              categories={["Comedy Content", "Humor", "Fun"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Komal-Pandey-a-top-Indian-Instagram-influencer-who-shares-the-latest-trends-fashion-ideas-and-lifestyle-updates-to-her-1.5-million-followers..png"
              }
              platform={"Youtube"}
              price={500}
              categories={["Ads Specialist", "Zoologist", "Entrepreneur"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Kritika-Khurana-A.K.A-%E2%80%98that-Boho-Girl-with-her-trending-style-updates-and-fashion-ideas-that-her-1.5M-followers-love-her-for..png"
              }
              platform={"Youtube"}
              price={800}
              categories={["Fashion", "Travel", "Luxury Brands"]}
            />
            <HomeCard
              imageLink={
                "https://www.influencer.in/wp-content/uploads/2020/12/Sadaf-Hussain-a-famous-Indian-Instagrammer-shares-his-amazing-make-at-home-recipes-with-his-29.3K-followers..png"
              }
              platform={"Youtube"}
              price={600}
              categories={["Daily Life Hacks", "Fun", "Business Owner"]}
            />
          </div>

          {/* <Faq /> */}
        </div>
      </div>
    </section>
  );
};

export default index;
