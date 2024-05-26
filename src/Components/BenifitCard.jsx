/* eslint-disable react/prop-types */

// import React from "react"

function BenifitCard(props) {
  return (
    <div className="bg-white px-6 rounded-lg py-8">
      <div>
        <h1 className="text-5xl font-bold text-right mb-4">0{props.id}</h1>
      </div>
      <div className="">
        <h4 className="text-[22px] font-semibold mb-2">{props.title}</h4>
        <p className="text-[16px]">{props.disc}</p>
      </div>
      <div>
        <div className="flex justify-end">
          <button className="mt-4 bg-gray-100 text-white p-4 rounded  ">
            <img
              width="16"
              height="16"
              className=""
              src="https://img.icons8.com/windows/32/FF9500/up-right-arrow.png"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BenifitCard;
