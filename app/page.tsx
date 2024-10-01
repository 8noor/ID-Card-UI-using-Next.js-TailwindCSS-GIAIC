import Image from "next/image";
import React from "react";

export default function IDCard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6 ">
        <div className=" bg-slate-200 p-12 rounded-lg shadow-lg max-w-4x1 w-full flex items-center justify-center border-4 border-sky-300">
          {/* background Image */}

          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="relative w-full h-full  max-w-[300px] max-h-[550px]">
              <Image
                src="/images/background.jpeg"
                alt="background images"
                width={300}
                height={550}
                objectFit="cover"
                className="opacity-10  "
              />
            </div>
          </div>

          {/* Left Section */}
          <div className="w-2/3 pr-4 pt-16 relative z-10">
            {/* Logo */}
            <img
              src="/images/logo.jpeg"
              alt="card logo"
              className="absolute top-[-45px] left-0 w-16 h-18 z-10"
            />

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>Name:</strong>
              </span>
              <span className="text-black">NoorAnum </span>
            </p>

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>Roll No:</strong>
              </span>
              <span className="text-black">00123456 </span>
            </p>

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>Distance Learning:</strong>
              </span>
              <span className="text-black">No </span>
            </p>

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>City:</strong>
              </span>
              <span className="text-black">Karachi </span>
            </p>

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>Center:</strong>
              </span>
              <span className="text-black">Governor House Karachi </span>
            </p>

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>Campus:</strong>
              </span>
              <span className="text-black">Main </span>
            </p>

            <p className="mb-2">
              <span className=" text-sky-500">
                {" "}
                <strong>Day/Time:</strong>
              </span>
              <span className="text-black">Monday- 02:00-05:00 PM </span>
            </p>

            <p>
              <span className=" text-sky-500">
                {" "}
                <strong>Batch:</strong>
              </span>
              <span className="text-black">1 </span>
            </p>

            {/* Button Section */}
            <div className="flex flex-col mt-4">
              <button className=" relative w-full p-2 rounded-lg  mb-8 border border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-400"
                  style={{ width: "100%" }}
                ></span>

                <span className="relative z-10">Q2 </span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className=" w-1/3 text-center  relative z-10">
            <Image
              src={"/images/noor.jpeg"}
              alt="profile picture"
              width={800}
              height={800}
              className="rounded-lg mb-6 w-full "
            />

            <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">
              <b>Authorized Signature</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
