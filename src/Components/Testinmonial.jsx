// import React from 'react'
import Logo from "../assets/Image/Logo.png"

function Testinmonial() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, officia quo reprehenderit consequatur sequi expedita ratione. Placeat facilis expedita ex, illo eius laborum sapiente sit, quae officia at tenetur eligendi.</p>
      </div>
      <div className="py-4 ">

      </div>
      <div className="flex justify-between">
        <div className="flex justify-center text-center items-center space-x-4 h-11">
          <img src={Logo} alt="" />
        <p>Name of the .....</p>
        </div>
        <button className="border px-2 rounded">Read Full story</button>
      </div>

    </div>
  )
}

export default Testinmonial