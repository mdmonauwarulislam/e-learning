// import React from "react";

function BenifitCard(props) {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="text-5xl font-bold text-right mb-4">0{props.indexValue+1}</h1>
      <h4 className="text-xl font-semibold mb-2">{props.title}</h4>
      <p className="text-gray-600">
        {props.desc}
      </p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full text-right">
        Arrow
      </button>
    </div>
  );
}

export default BenifitCard;
