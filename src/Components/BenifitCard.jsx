// import React from "react"

function BenifitCard(props) {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="text-5xl font-bold text-right mb-4">0{props.indexValue+1}</h1>
      <h4 className="text-xl font-semibold mb-2">{props.title}</h4>
      <p className="text-gray-600">
        {props.desc}
      </p>
      <button className="mt-4 bg-gray-100 text-white p-4 rounded text-right float-right">
      <img width="16" height="16" className="" src="https://img.icons8.com/windows/32/FF9500/up-right-arrow.png" alt="arrow"/>
      </button>
    </div>
  );
}

export default BenifitCard;
