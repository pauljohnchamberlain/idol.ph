import React from "react";
import Image from "next/image";
import Reviews from "./Reviews";

const index = () => {
  return (
    <div>
      <nav className="border-2 p-8">Navbar</nav>
      <div className="head-center text-center p-4">
        <h1 className="pb-4 text-5xl font-bold leading-snug">
          Get your products to a <br /> different level
        </h1>
        <p className="p-2 pt-0 text-xl pb-5">
          Discover influential personalities, execute marketing campaigns, and
          generate distinctive <br /> content for your brand effortlessly.
        </p>
        <button className="btn border p-3 rounded-lg bg-slate-900 text-white hover:bg-slate-700">
          Get Started ...
        </button>
      </div>
      <hr />
      <div className="influencers p-5 pb-12">
        <h1 className="text-center p-4 text-5xl font-bold leading-snug">
          Select your favorite Influencer
        </h1>
        <div className="instagram pb-16">
          <h1 className="p-4 text-3xl font-sans font-bold leading-snug">
            Instagram
          </h1>
          <div className="profiles px-8 grid grid-cols-3 gap-8">
            <div className="profile h-[30vh] border rounded-lg">
              <div className="pro-img">
                <Image
                  src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg"
                  width={"500"}
                  height={"500"}
                  alt="Picture of the author"
                  className="w-full rounded-lg rounded-b-none"
                />
              </div>
              <div className="pro-desc p-4">
                <h1 className="font-semibold text-2xl">Deepanshu Fitness</h1>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, debitis?
                </p>
                <h1 className="font-semibold text-2xl">₹10000</h1>
              </div>
            </div>
            <div className="profile h-[30vh] border rounded-lg">
              <div className="pro-img">
                <Image
                  src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg"
                  width={"500"}
                  height={"500"}
                  alt="Picture of the author"
                  className="w-full rounded-lg rounded-b-none"
                />
              </div>
              <div className="pro-desc p-4">
                <h1 className="font-semibold text-2xl">Deepanshu Fitness</h1>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, debitis?
                </p>
                <h1 className="font-semibold text-2xl">₹10000</h1>
              </div>
            </div>
            <div className="profile h-[30vh] border rounded-lg">
              <div className="pro-img">
                <Image
                  src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg"
                  width={"500"}
                  height={"500"}
                  alt="Picture of the author"
                  className="w-full rounded-lg rounded-b-none"
                />
              </div>
              <div className="pro-desc p-4">
                <h1 className="font-semibold text-2xl">Deepanshu Fitness</h1>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, debitis?
                </p>
                <h1 className="font-semibold text-2xl">₹10000</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="youtube py-32 pb-56">
          <h1 className="p-4 text-3xl font-sans font-bold leading-snug">
            Youtube
          </h1>
          <div className="profiles px-8 grid grid-cols-3 gap-8">
            <div className="profile h-[30vh] border rounded-lg">
              <div className="pro-img">
                <Image
                  src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg"
                  width={"500"}
                  height={"500"}
                  alt="Picture of the author"
                  className="w-full rounded-lg rounded-b-none"
                />
              </div>
              <div className="pro-desc p-4">
                <h1 className="font-semibold text-2xl">Deepanshu Fitness</h1>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, debitis?
                </p>
                <h1 className="font-semibold text-2xl">₹10000</h1>
              </div>
            </div>
            <div className="profile h-[30vh] border rounded-lg">
              <div className="pro-img">
                <Image
                  src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg"
                  width={"500"}
                  height={"500"}
                  alt="Picture of the author"
                  className="w-full rounded-lg rounded-b-none"
                />
              </div>
              <div className="pro-desc p-4">
                <h1 className="font-semibold text-2xl">Deepanshu Fitness</h1>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, debitis?
                </p>
                <h1 className="font-semibold text-2xl">₹10000</h1>
              </div>
            </div>
            <div className="profile h-[30vh] border rounded-lg">
              <div className="pro-img">
                <Image
                  src="https://t4.ftcdn.net/jpg/01/89/74/15/360_F_189741513_VVidINOxRfACG5H3kypVufaGMbFjBq7X.jpg"
                  width={"500"}
                  height={"500"}
                  alt="Picture of the author"
                  className="w-full rounded-lg rounded-b-none"
                />
              </div>
              <div className="pro-desc p-4">
                <h1 className="font-semibold text-2xl">Deepanshu Fitness</h1>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias, debitis?
                </p>
                <h1 className="font-semibold text-2xl">₹10000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <Reviews />
    </div>
  );
};

export default index;
