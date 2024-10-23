import Image from "next/image";

const HomeCard = ({ imageLink, platform, price, categories }) => {
  return (
    <div className="rounded-md">
      <Image
        src={imageLink}
        alt="product preview"
        width={280}
        height={280}
        quality={100}
        className="rounded-lg bg-white p-2 sm:p-auto md:p-auto h-[300px] object-cover shadow-md ring-1 ring-gray-900/10"
      />
      <div className="flex justify-between">
        <p className="text-slate-700 text-sm">{platform}</p>
        <p>₱{price}</p>
      </div>
      <div className="flex max-w-[250px] flex-wrap">
        {categories.map((category, idx) => {
          return category == categories[categories.length - 1] ? (
            <span key={idx} className="text-slate-500 text-sm">
              {" "}
              {category}
            </span>
          ) : (
            <span key={idx} className="text-slate-500 text-sm">
              {" "}
              {category},{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard;
