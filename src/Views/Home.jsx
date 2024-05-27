import { useRef } from "react";
import lightIcon from "../assets/Image/lightIcon.png";
import brandContainer from "../assets/Image/Container.png";
import video from "../assets/Image/video.mp4";
import BenifitCard from "../Components/BenifitCard";
import CourseCard from "../Components/CourseCard";
import Testinmonial from "../Components/Testinmonial";
import Pricing from "../Components/Pricing";


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
  const benefitCard = [
    {
      id: 1,
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      id: 2,
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      id: 3,
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      id: 4,
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      id: 5,
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
  ];

  const courseCard = [
    {
      tag1: "DSA",
      tag2: "Learning",
      author: "Mannu",
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      tag1: "DSA",
      tag2: "Learning",
      author: "Mannu",
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      tag1: "DSA",
      tag2: "Learning",
      author: "Mannu",
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
    {
      tag1: "DSA",
      tag2: "Learning",
      author: "Mannu",
      title: "Flexing Learning Schedule",
      disc: "Fit your coursework around yout existing commitements and obligations",
    },
  ];

  const testimonial = [
    {
      review:"Very good coursework around yout existing commitements and obligations",
      user:"Monauwarul"
    },
    {
      review:"Very good coursework around yout existing commitements and obligations",
      user:"Monauwarul"
    },
    {
      review:"Very good coursework around yout existing commitements and obligations",
      user:"Monauwarul"
    },
    {
      review:"Very good coursework around yout existing commitements and obligations",
      user:"Monauwarul"
    },
  ]

  return (
    <>
      <div className="bg-grayColor block h-screen pt-8 md:pt-32">
        <div className="rounded-lg pt-8 text-center md:mx-16 lg:mx-20 xl:mx-32 ">
          <div className="w-full flex justify-center">
            <div className="flex items-center justify-center bg-white py-2 mx-4 md:mx-10 lg:mx-16 xl:mx-16 rounded-md mb-4 border border-gray-300 md:py-5">
              <img
                src={lightIcon}
                alt="Light Icon"
                className="h-8 w-8 mr-2 bg-orange-100 p-1 rounded ml-8"
              />
              <h5 className="text-[16px] md:text-4xl lg:text-4xl xl:text-4xl font-semibold mr-8">
                <span className="text-orangeBg">Unlock</span> Your Creative
                Potential
              </h5>
            </div>
          </div>
          <div className="block md:max-w-full max-w-[280px] mx-auto">
            <h5 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold tracking-wide">
              With Online Design and Development Courses.
            </h5>
            <p className="text-[14px] mt-2  md:text-lg ">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>
        </div>
        <div className="mt-4 flex  md:space-y-0 justify-center gap-4">
          <button className="bg-orangeBg hover:bg-white p-2  rounded hover:text-black text-white hover:border border-gray-300 transition duration-300 w-auto">
            Explore Courses
          </button>
          <button className="bg-white hover:bg-orangeBg p-2 rounded hover:text-white border border-gray-300 transition duration-300 w-auto">
            View Pricing
          </button>
        </div>
        <div className="mt-8 md:mt-16 justify-center items-center px-4 md:px-0 py-4 max-w-[1280px] mx-auto">
          <img src={brandContainer} alt="" className="max-w-full" />
        </div>
      </div>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ video section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

      <div className="bg-grayColor">
        <div className=" flex items-center justify-center md:mt-0 mt-[-300px] mx-4 max-w-[1280px] md:mx-auto max-h-[675px]">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1100px",
              maxHeight: "675px",
              margin: "auto",
            }}
          >
            <video
              ref={videoRef}
              width="100%"
              controls="true"
              className="rounded"
            >
              <source src={video} type="video/mp4" />
            </video>
            <button onClick={handlePlayPause}></button>
          </div>
        </div>
      </div>
      <div className="bg-grayColor ">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Benefit Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="flex flex-col pt-5 bg-grayColor max-w-[1280px] md:mx-auto mx-4 ">
          <h3 className="text-2xl md:text-4xl font-bold ">Benefits</h3>
          <div className=" rounded-lg md:flex ">
            <div className="md:w-3/4">
              <p className="text-[14px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="mt-4 w-1/4 justify-end md:flex">
              <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border border-orangeBg transition duration-300 w-auto">
                View all
              </button>
            </div>
          </div>
          <div
            className={`md:grid md:grid-cols-3 gap-4 md:pt-12 pt-3`}
          >
            {benefitCard.map((item, index) => (
              <BenifitCard
                key={index}
                id={item.id}
                title={item.title}
                disc={item.disc}
              />
            ))}
          </div>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Our Course ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="flex flex-col pt-5 bg-grayColor max-w-[1280px] md:mx-auto mx-4 ">
          <h3 className="text-2xl md:text-4xl font-bold ">Our Courses</h3>
          <div className=" rounded-lg md:flex ">
            <div className="md:w-3/4">
              <p className="text-[14px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="mt-4 w-1/4 justify-end md:flex">
              <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border border-orangeBg transition duration-300 w-auto">
                View all
              </button>
            </div>
          </div>
          <div
            className={`md:grid md:grid-cols-2 gap-4 md:pt-12 pt-3 `}
          >
            {courseCard.map((item, index) => (
              <CourseCard
                key={index}
                tag1={item.tag1}
                tag2={item.tag2}
                author={item.author}
                title={item.title}
                disc={item.disc}
              />
            ))}
          </div>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Our Testimonial ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

        <div className="flex flex-col pt-5 bg-grayColor max-w-[1280px] md:mx-auto mx-4 ">
          <h3 className=" text-2xl md:text-4xl font-bold ">Our Testimonial</h3>
          <div className="rounded-lg md:flex">
            <div className="md:w-3/4">
              <p className="text-[14px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="mt-4 w-1/4 justify-end md:flex">
              <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border border-orangeBg transition duration-300 w-auto">
                View all
              </button>
            </div>
            </div>
            <div className=" mt-4 md:grid md:grid-cols-2 gap-4">
            {testimonial.map((item, index) => (
              <Testinmonial
              
                key={index}
                review={item.review}
                user={item.user}
              />
            ))}
            </div>
            

          
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ pricing boxed ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="flex flex-col pt-5 bg-grayColor max-w-[1280px] md:mx-auto mx-4 ">
          <h3 className=" text-2xl md:text-4xl font-bold ">Our Pricing</h3>
          <div className="rounded-lg md:flex">
            <div className="mt-4 md:flex justify-between ">
              <p className="text-[14px] md:text-[16px] md:w-3/4">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <div className="bg-white p-2 md:w-[13%] w-1/2 mt-4 md:mt-0 rounded mb-5 flex justify-between">
                <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border transition duration-300 w-auto">
                  Monthly
                </button>
                <button className="bg-white text-black p-2 rounded hover:bg-orangeBg hover:text-white border  transition duration-300 w-auto">
                  Yearly
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white px-20 py-6 pt-5 mb-10 md:flex" ><Pricing/><Pricing/></div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
