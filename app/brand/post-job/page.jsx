import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TalentSelection() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
      {/* Image Collage */}
      <div className="md:w-1/2 grid grid-cols-3 grid-rows-3 gap-2 p-2">
        <Image
          src="/brand/post-job/200x300.webp"
          width={200}
          height={300}
          alt="Talent 1"
          className="object-cover w-full h-full"
        />
        <Image
          src="/brand/post-job/400x300-3.png"
          width={400}
          height={300}
          alt="Talent 2"
          className="object-cover w-full h-full col-span-2"
        />
        <Image
          src="/brand/post-job/200x300-5.png"
          width={200}
          height={300}
          alt="Talent 3"
          className="object-cover w-full h-full row-span-2"
        />
        <Image
          src="/brand/post-job/200x300-3.png"
          width={200}
          height={300}
          alt="Talent 4"
          className="object-cover w-full h-full"
        />
        <Image
          src="/brand/post-job/200x300-4.png"
          width={200}
          height={300}
          alt="Talent 5"
          className="object-cover w-full h-full"
        />
        <Image
          src="/brand/post-job/400x300.webp"
          width={400}
          height={300}
          alt="Talent 6"
          className="object-cover w-full h-full col-span-2"
        />
        <Image
          src="/brand/post-job/600x300-2.png"
          width={600}
          height={300}
          alt="Talent 7"
          className="object-cover w-full h-full col-span-3"
        />
      </div>

      {/* Selection Options */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        {/* <div className="mb-8 text-center">
          <Image src="/placeholder.svg?height=100&width=100" width={100} height={100} alt="TheRightFit Logo" className="mx-auto mb-4" />
        </div> */}
        <h1 className="text-3xl font-bold mb-4 text-center">
          Who do you want to work with?
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Select an option that best suits your job's requirements. This also
          helps relevant applicants find and apply for your job posting.
        </p>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full justify-start text-left h-auto py-4 px-6"
          >
            <div>
              <div className="font-semibold">Cast Talent</div>
              <div className="text-sm text-gray-600">
                Book models, actors, and real people
              </div>
            </div>
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-left h-auto py-4 px-6"
          >
            <div>
              <div className="font-semibold">Creative production</div>
              <div className="text-sm text-gray-600">
                Book Photographers, Videographers and Make up artists
              </div>
            </div>
          </Button>
          <div className="pt-4">
            <h2 className="text-lg font-semibold mb-2">
              Looking for creators and influencers?
            </h2>
            <Button
              variant="outline"
              className="w-full justify-start text-left h-auto py-4 px-6"
            >
              <div>
                <div className="font-semibold">Work with creators</div>
                <div className="text-sm text-gray-600">
                  Book influencers and content creators
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
