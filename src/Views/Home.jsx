import { useRef } from "react";
import lightIcon from "../assets/Image/lightIcon.png";
import brandContainer from "../assets/Image/Container.png";
import video from "../assets/Image/video.mp4";
import BenifitCard from "../Components/BenifitCard";
import CourseCard from "../Components/CourseCard";
import Testinmonial from "../Components/Testinmonial";

function Home() {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };
  const headingTitle = [
    {
      title: "hello1",
      content: "this is content",
    },
    {
      title: "hello1",
      content: "this is content",
    },
    {
      title: "hello1",
      content: "this is content",
    },
  ];

  return (
    <>
      <div className="bg-grayColor block h-screen items-center justify-center pt-12">
        <div className="rounded-lg p-4 sm:px-8 sm:pt-8 text-center mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-32">
          <div className="flex items-center justify-center bg-white py-2 sm:py-3 mx-2 sm:mx-4 md:mx-10 lg:mx-16 xl:mx-16 rounded mb-4 border border-gray-300">
            <img
              src={lightIcon}
              alt="Light Icon"
              className="h-8 w-8 mr-2 bg-orange-100 p-1 rounded"
            />
            <h5 className="sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-semibold ">
              <span className="text-orangeBg">Unlock</span> Your Creative
              Potential
            </h5>
          </div>
          <div>
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
              With Online Design and Development Courses.
            </h5>
            <p className="text-sm sm:text-base md:text-lg">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="bg-orangeBg hover:bg-white p-2 rounded hover:text-black text-white hover:border border-gray-300 transition duration-300 w-auto">
            Explore Courses
          </button>
          <button className="bg-white hover:bg-orangeBg p-2 rounded hover:text-white border border-gray-300 transition duration-300 mt-2 sm:mt-0 w-auto">
            View Pricing
          </button>
        </div>
        <div className="mt-16 justify-center items-center px-4 md:px-8 lg:px-20 py-4">
          <img src={brandContainer} alt="" className="max-w-full" />
        </div>
      </div>
      <div className="bg-grayColor">
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            controls
            className="rounded"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={handlePlayPause}
          >
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-5 bg-grayColor">
        <h3 className=" px-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold ">
          Benefits
        </h3>
        <div className=" rounded-lg px-2 sm:px-16 md:mx-12 lg:mx-16 xl:mx-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="text-sm sm:text-sm md:text-sm font-extralight  lg:text-sm xl:text-base ">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="mt-4 w-1/4 justify-end flex">
            <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border border-orangeBg transition duration-300 w-auto">
              View all
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4 px-20">
          {headingTitle.map((item, index) => (
            <BenifitCard
              key={index}
              data={item}
              indexValue={index}
              title={item.title}
              desc={item.content}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col pt-5 bg-grayColor">
        <h3 className=" px-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold ">
          Our Courses
        </h3>
        <div className=" rounded-lg px-2 sm:px-16 md:mx-12 lg:mx-16 xl:mx-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="text-sm sm:text-sm md:text-sm font-extralight  lg:text-sm xl:text-base ">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="mt-4 w-1/4 justify-end flex">
            <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border border-orangeBg transition duration-300 w-auto">
              View all
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-6 py-4 px-20">
          {headingTitle.map((item, index) => (
            <CourseCard key={index} data={item} />
          ))}
        </div>
      </div>


      {/* Our Testimonial */}

      <div className="flex flex-col pt-5 bg-grayColor">
        <h3 className=" px-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold ">
          Our Testimonial
        </h3>
        <div className=" rounded-lg px-2 sm:px-16 md:mx-12 lg:mx-16 xl:mx-4 flex">
          <div className="flex flex-col w-3/4">
            <p className="text-sm sm:text-sm md:text-sm font-extralight  lg:text-sm xl:text-base ">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="mt-4 w-1/4 justify-end flex">
            <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border border-orangeBg transition duration-300 w-auto">
              View all
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 py-4 px-20">
          {headingTitle.map((item, index) => (
            <Testinmonial key={index} data={item} />
          ))}
        </div>
      </div>

      {/* pricing boxed  */}
      <div className="flex flex-col pt-5 bg-grayColor">
        <h3 className=" px-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold ">
          Our Pricing
        </h3>
        <div className=" rounded-lg px-2 sm:px-16 md:mx-12 lg:mx-16 xl:mx-4 flex">
          <div className="flex mt-4 justify-between">
            <p className="text-sm sm:text-sm md:text-sm font-extralight  lg:text-sm xl:text-base w-3/4">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
            <div className=" flex space-x-2 bg-white p-2 w-auto rounded">
            <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border transition duration-300 w-auto">
              Monthly
            </button>
            <button className="bg-white text-black p-2 rounded hover:bg-orangeBg hover:text-white border  transition duration-300 w-auto">
              Yearly
            </button>
            </div>
          </div>
          
        </div>
        <div className="bg-white px-20 py-6 pt-5">
        <div className="grid grid-cols-2 gap-6 py-4 px-20">
          {headingTitle.map((item, index) => (
            <Testinmonial key={index} data={item} />
          ))}
        </div>
        </div>
      </div>


    </>
  );
}

export default Home;
