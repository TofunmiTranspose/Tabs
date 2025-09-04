import { useState, type ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const uploadBanner = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setBannerUrl(URL.createObjectURL(file));
  };
  const uploadProfile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setProfileUrl(URL.createObjectURL(file));
  };
  return (
    <div
      className="w-full max-w-[2100px] h-screen overflow-y-scroll relative"
      style={{ scrollbarWidth: "thin" }}
    >
      {/* Header */}
      <div className="w-full relative bg-[#1b1b1b]">
        <img
          src={bannerUrl}
          alt="banner"
          className="object-cover h-30 md:h-50 2xl:h-60 w-full"
        />
        <button className="absolute top-2 right-2">
          <label
            htmlFor="banner-upload"
            className="p-2 bg-gray-700 hover:bg-gray-600 transition ease duration-300 text-white rounded-full flex items-center justify-center"
          >
            <FaCamera className="size-3" />
          </label>
          <input
            type="file"
            accept="image/*"
            id="banner-upload"
            className="hidden"
            onChange={uploadBanner}
          />
        </button>
      </div>
      {/* Intro */}
      <div className="md:flex gap-5 items-center md:p-2">
        <div className="absolute md:relative top-13 md:top-0 left-1 rounded-full p-1 bg-white shadow md:size-32 xl:size-42 2xl:size-48">
          <img
            src={profileUrl}
            className="size-30 md:size-30 xl:size-40 2xl:size-46 rounded-full"
          />
          <button className="absolute bottom-0 right-5">
            <label htmlFor="profile-upload">
              <div className="p-1.5 text-gray-600 hover:bg-gray-400 hover:text-gray-200 bg-gray-200 rounded-full transition ease duration-300">
                <FaCamera size={14} />
              </div>
            </label>
            <input
              onChange={uploadProfile}
              type="file"
              id="profile-upload"
              accept=""
              className="hidden"
            />
          </button>
        </div>

        <div className="ml-35 md:ml-0 pt-2 ">
          <h2 className="font-semibold md:font-bold md:text-xl xl:text-2xl 2xl:text-3xl">
            Transpose WebDev
          </h2>
          <div className="">
            <p className="text-gray-600 text-[10px] md:text-xs xl:text-sm 2xl:text-base">
              <span className="font-bold">5k</span> followers
            </p>
            <p className="hidden md:block text-gray-700 text-[10px] md:text-xs xl:text-sm 2xl:text-base">
              This is a short description of my page
            </p>
            <button className="hidden md:block bg-red-600 mt-1 text-[10px] md:text-xs xl:text-sm 2xl:text-base rounded px-1  md:px-2 xl:px-4 py-0.5 md:py-1 xl:py-2 xl:font-semibold text-white cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <Tabs />
    </div>
  );
};

export default Profile;
