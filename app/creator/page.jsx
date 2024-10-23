import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const index = () => {
  return (
    <section className="min-h-screen flex flex-col gap-y-32 p-14">
      <div className="mt-10 flex flex-col items-center justify-center gap-2 font-semibold">
        <h1 className="text-5xl">Start Making Money as a Creator</h1>
        <p className=" text-gray-400">
          Simplest way to get paid for your Social Media influence{" "}
        </p>
      </div>

      <div className="flex items-center justify-center gap-x-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
          className="drop-shadow-2xl"
        >
          <radialGradient
            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
            cx="19.38"
            cy="42.035"
            r="44.899"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fd5"></stop>
            <stop offset=".328" stop-color="#ff543f"></stop>
            <stop offset=".348" stop-color="#fc5245"></stop>
            <stop offset=".504" stop-color="#e64771"></stop>
            <stop offset=".643" stop-color="#d53e91"></stop>
            <stop offset=".761" stop-color="#cc39a4"></stop>
            <stop offset=".841" stop-color="#c837ab"></stop>
          </radialGradient>
          <path
            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          ></path>
          <radialGradient
            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
            cx="11.786"
            cy="5.54"
            r="29.813"
            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#4168c9"></stop>
            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
          </radialGradient>
          <path
            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
          ></path>
          <path
            fill="#fff"
            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
          ></path>
          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
          <path
            fill="#fff"
            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
          ></path>
        </svg>

        <svg
          className="drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 14.660156 A 1.50015 1.50015 0 1 0 9 14.660156 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 25 A 1.50015 1.50015 0 1 0 42 25 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 24.162109 12.001953 C 20.643109 12.025953 17.931609 13.217922 16.099609 15.544922 C 14.485609 17.597922 13.652047 20.439719 13.623047 24.011719 C 13.651047 27.562719 14.484609 30.403078 16.099609 32.455078 C 17.930609 34.782078 20.643641 35.974047 24.181641 35.998047 C 27.309641 35.977047 29.520609 35.150266 31.349609 33.322266 C 33.779609 30.894266 33.703391 27.848562 32.900391 25.976562 C 32.320391 24.624562 31.223609 23.5305 29.724609 22.8125 C 29.689609 22.7945 29.653187 22.778719 29.617188 22.761719 C 29.353188 19.381719 27.403266 17.438969 24.197266 17.417969 C 22.253266 17.417969 20.632812 18.253484 19.632812 19.771484 C 19.520813 19.941484 19.565375 20.170109 19.734375 20.287109 L 21.402344 21.431641 C 21.485344 21.488641 21.587547 21.509234 21.685547 21.490234 C 21.783547 21.471234 21.872734 21.412125 21.927734 21.328125 C 22.531734 20.413125 23.495609 20.222656 24.224609 20.222656 C 25.110609 20.227656 25.768641 20.473125 26.181641 20.953125 C 26.404641 21.212125 26.575359 21.550891 26.693359 21.962891 C 25.936359 21.871891 25.131063 21.850437 24.289062 21.898438 C 21.183063 22.077437 19.185266 23.917516 19.322266 26.478516 C 19.391266 27.784516 20.041344 28.909531 21.152344 29.644531 C 22.070344 30.249531 23.249609 30.549469 24.474609 30.480469 C 26.095609 30.391469 27.370625 29.767953 28.265625 28.626953 C 28.838625 27.897953 29.225359 27.002344 29.443359 25.902344 C 29.865359 26.243344 30.175141 26.642703 30.369141 27.095703 C 30.824141 28.153703 30.848016 29.896172 29.416016 31.326172 C 28.122016 32.619172 26.552781 33.180266 24.175781 33.197266 C 21.533781 33.177266 19.543766 32.339031 18.259766 30.707031 C 17.040766 29.157031 16.409719 26.900906 16.386719 24.003906 C 16.409719 21.100906 17.040766 18.842969 18.259766 17.292969 C 19.543766 15.660969 21.533922 14.821734 24.169922 14.802734 C 26.834922 14.822734 28.862266 15.666547 30.197266 17.310547 C 30.850266 18.114547 31.350594 19.132844 31.683594 20.339844 C 31.738594 20.537844 31.944578 20.654516 32.142578 20.603516 L 34.097656 20.082031 C 34.194656 20.057031 34.276172 19.99225 34.326172 19.90625 C 34.375172 19.81825 34.387328 19.716141 34.361328 19.619141 C 33.930328 18.034141 33.246172 16.658344 32.326172 15.527344 C 30.444172 13.212344 27.705109 12.025953 24.162109 12.001953 z M 7.4765625 18.882812 A 1.50015 1.50015 0 0 0 6 20.404297 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 32.787109 A 1.50015 1.50015 0 1 0 39 32.787109 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 20.404297 A 1.50015 1.50015 0 0 0 7.4765625 18.882812 z M 25.123047 24.673828 C 25.720047 24.673828 26.289312 24.720453 26.820312 24.814453 C 26.536313 27.228453 25.404266 27.623594 24.322266 27.683594 C 23.580266 27.712594 22.892469 27.527203 22.480469 27.158203 C 22.229469 26.933203 22.093172 26.653172 22.076172 26.326172 C 22.038172 25.605172 22.639359 24.798359 24.443359 24.693359 C 24.673359 24.680359 24.900047 24.673828 25.123047 24.673828 z"></path>
        </svg>

        <svg
          className="drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FF3D00"
            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
          ></path>
          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>

        <svg
          className="drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1"
            x1="4.338"
            x2="38.984"
            y1="-10.056"
            y2="49.954"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#4b4b4b"></stop>
            <stop offset=".247" stop-color="#3e3e3e"></stop>
            <stop offset=".686" stop-color="#2b2b2b"></stop>
            <stop offset="1" stop-color="#252525"></stop>
          </linearGradient>
          <path
            fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)"
            d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
          ></path>
          <path
            fill="#fff"
            d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
          ></path>
          <polygon
            fill="#fff"
            points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
          ></polygon>
          <polygon
            fill="#fff"
            points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
          ></polygon>
        </svg>
      </div>

      <div className="flex flex-col mx-auto gap-y-5 items-center justify-center">
        <h3 className="text-3xl bg-gradient-to-tr from-pink-400 to-blue-400 bg-clip-text text-transparent font-bold">
          Loved by 100+ Creators
        </h3>
        <div className="w-1/2 flex flex-wrap items-center justify-center gap-y-2 gap-x-4">
          <Badge variant="outline" className={"tag"}>
            Beauty
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Lifestyle
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Travel
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Health & Fitness
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Music & Dance
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Family & Children
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Science & Tech
          </Badge>
          <Badge variant="outline" className={"tag"}>
            Comedy & Entertainment
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap justify-center">
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>

        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="creator"
            className="rounded-md"
            src={
              "https://storage.googleapis.com/pai-images/599185e046af4cf2a028a46c394a5440.jpeg"
            }
            width={260}
            height={260}
          />
          <div className="absolute bottom-0 bg-black/50 w-full flex flex-col items-start p-3">
            <h4 className="bg-gradient-to-tr from-pink-50 to-blue-50 bg-clip-text text-transparent">
              John Wick,{" "}
              <span className="text-gray-300 text-xs">Science & Tech</span>
            </h4>
            <span className="flex items-center justify-center gap-x-1 text-sm text-gray-300">
              <IoLocationSharp />
              New Delhi, India
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 items-center justify-center">
        <h3 className="text-3xl bg-gradient-to-tr from-pink-400 to-blue-400 bg-clip-text text-transparent font-bold">
          Collaborations with:
        </h3>
        <div className="flex items-center justify-center gap-x-5">
          <Badge
            variant={"outline "}
            className="bg-gray-300 text-gray-600 text-3xl px-5 py-3 font-light"
          >
            Shopify
          </Badge>

          <Badge
            variant={"outline "}
            className="bg-gray-300 text-gray-600 text-3xl px-5 py-3 font-light"
          >
            InstaMart
          </Badge>

          <Badge
            variant={"outline "}
            className="bg-gray-300 text-gray-600 text-3xl px-5 py-3 font-light"
          >
            Myntra
          </Badge>
          <Badge
            variant={"outline "}
            className="bg-gray-300 text-gray-600 text-3xl px-5 py-3 font-light"
          >
            Yep!Me
          </Badge>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I get paid?</AccordionTrigger>
            <AccordionContent>
              Payments are made directly through our website. We use Dots to pay
              you out. Once you complete an order, you will be able to choose
              from over 5 methods including PayPal, CashApp or Venmo to receive
              your money.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is my payment guaranteed?</AccordionTrigger>
            <AccordionContent>
              Yes, we collect the payment from the buyer and hold it until the
              order is complete. This ensures that both sides are protected
              during every transaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I decline orders?</AccordionTrigger>
            <AccordionContent>
              Yes, you are able to accept or decline an order. This gives you
              the freedom to only work with brands that align with you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What platforms does Collabstr support?
            </AccordionTrigger>
            <AccordionContent>
              Currently you can list your services for Instagram, TikTok,
              YouTube, Threads
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default index;
