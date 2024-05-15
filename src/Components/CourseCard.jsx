// import React from 'react'
import LearningImg from "../assets/Image/learning.jpg"

function CourseCard() {
  return (
    <div className="bg-white p-6 rounded-lg">
            <img src= {LearningImg} alt="Image" className="w-full mb-4 rounded" />
            <div className="flex justify-between">
              <div className="flex space-x-3">
                <p className="mb-2">Tag</p>
                <p className="mb-2">Tag</p>
              </div>
              <p className="text-right mb-2">Author</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Headline</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                inventore, totam repellendus atque autem sunt ullam a iste animi
                at illum et! Ipsum quod, rem atque adipisci dolor ea error?
              </p>
              <button className="w-full bg-gray-100 border hover:bg-orangeBg text-black hover:text-white py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
  )
}

export default CourseCard