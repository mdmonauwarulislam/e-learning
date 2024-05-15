// import React from 'react'
import Logo from "../assets/Image/Logo.png"

function Testinmonial() {
  return (
    <div>

    <div className="bg-white px-7 py-8 rounded-t-lg border border-b-0">
      <div className=" ">
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia quo reprehenderit consequatur sequi expedita ratione. Placeat facilis expedita ex, illo eius laborum sapiente sit, quae officia at tenetur eligendi.</p>
      </div>
    </div>
    <div className="bg-white px-7 py-6 rounded-b-lg border">
      <div className="flex justify-between">
        <div className="flex justify-center text-center items-center space-x-2 h-11">
          <img src={Logo} alt="" className="h-10 w-10"/>
        <p className="font-medium text-sm">Name of the .....</p>
        </div>
        <button className="border px-2 rounded font-medium text-sm bg-gray-50">Read Full story</button>
      </div>
    </div>
    </div>
  )
}

export default Testinmonial