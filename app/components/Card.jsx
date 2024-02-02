import Image from "next/image";
import React from "react";

function Card({ houseUrl, type }) {
  return (
    <div className="relative group">
      {/* image div below */}
      <div>
        <Image
          src={houseUrl}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* overlay div below */}
      <div
        className="bg-black bg-opacity-50 absolute bottom-0 right-0 left-0 h-0 overflow-hidden 
      group-hover:h-full transition-all duration-500 flex justify-center items-center"
      >
        <div>
          <h3 className="text-white font-semibold text-xl py-3 text-center">
            {type}
          </h3>
          <button className="bg-blue-600 text-white p-3 rounded">
            View Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
