import Image from "next/image";
import Link from "next/link";

export default function MediaKitPromo() {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden max-w-6xl mx-auto shadow-lg">
      {/* Left Section - Textual Promotional Content */}
      <div className="bg-blue-900 p-8 md:p-12 flex flex-col justify-center md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pitch like a pro with Media Kits
        </h2>
        <p className="text-blue-200 mb-8">
          Customise the content you want to showcase, to the brands you want to
          work with.
        </p>
        <Link
          href="#"
          className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg text-center uppercase tracking-wide hover:bg-yellow-300 transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2">
        <Image
          src="/placeholder.png?height=400&width=400"
          alt="Content creator with a bright blue bag"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
