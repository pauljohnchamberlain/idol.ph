import React from "react";

export default function ContentInfoForm({
  userinfo,
  setUserinfo,
  handleContentInfo,
}) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Content Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Add your content information here.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST" onSubmit={handleContentInfo}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                autoComplete="category"
                value={userinfo.category || ""}
                onChange={(e) =>
                  setUserinfo({ ...userinfo, category: e.target.value })
                }
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="fashion">Fashion</option>
                <option value="beauty">Beauty</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="technology">Technology</option>
                <option value="gaming">Gaming</option>
                <option value="fitness">Fitness</option>
                <option value="music">Music</option>
                <option value="art">Art</option>
              </select>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={userinfo.description || ""}
                onChange={(e) =>
                  setUserinfo({ ...userinfo, description: e.target.value })
                }
                className="mt-1 block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>

            {/* Platform inputs */}
            {userinfo.platforms.map((platform, index) => (
              <div key={index} className="col-span-6">
                <div className="mt-1 flex gap-2">
                  <input
                    type="text"
                    name={`profile-${index}`}
                    id={`profile-${index}`}
                    value={platform.profile}
                    onChange={(e) => {
                      const updatedPlatforms = [...userinfo.platforms];
                      updatedPlatforms[index].profile = e.target.value;
                      setUserinfo({ ...userinfo, platforms: updatedPlatforms });
                    }}
                    autoComplete={`profile-${platform.platform}`}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    name={`platform-${index}`}
                    id={`platform-${index}`}
                    disabled
                    value={platform.platform}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-100"
                  />
                  <select
                    name={`followers-${index}`}
                    id={`followers-${index}`}
                    value={platform.followers || ""}
                    onChange={(e) => {
                      const updatedPlatforms = [...userinfo.platforms];
                      updatedPlatforms[index].followers = e.target.value;
                      setUserinfo({ ...userinfo, platforms: updatedPlatforms });
                    }}
                    required
                    autoComplete="followers"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="select">select your followers</option>
                    <option value="0-1k">0-1k</option>
                    <option value="1-5k">1-5k</option>
                    <option value="5-10k">5-10k</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start my-4">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
