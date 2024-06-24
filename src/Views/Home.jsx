import { useRef } from "react";
import { HiBolt } from "react-icons/hi2";
import brandContainer from "../assets/Image/Container.png";
import video from "../assets/Image/video.mp4";
import BenifitCard from "../Components/BenifitCard";
import CourseCard from "../Components/CourseCard";
import Testinmonial from "../Components/Testinmonial";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";

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
      review:
        "Very good coursework around yout existing commitements and obligations",
      user: "Monauwarul",
    },
    {
      review:
        "Very good coursework around yout existing commitements and obligations",
      user: "Monauwarul",
    },
    {
      review:
        "Very good coursework around yout existing commitements and obligations",
      user: "Monauwarul",
    },
    {
      review:
        "Very good coursework around yout existing commitements and obligations",
      user: "Monauwarul",
    },
  ];

  const pricing = [
    {
      title: "Free Plan",
      price: "$0",
      period: "/month",
      features: [
        {
          isCross: true,
          contents: "Access to selected free courses",
        },
        {
          isCross: true,
          contents: "Limited course materials and resources",
        },
        {
          isCross: true,
          contents: "Basic community support",
        },
        {
          isCross: true,
          contents: "No certification upon completion",
        },
        {
          isCross: true,
          contents: "Ad-supported platform",
        },
        {
          isCross: false,
          contents: "Access to exclusive Pro Plan community forums",
        },
        {
          isCross: false,
          contents: "Early access to new courses and updates",
        },
      ],

      isPro: false,
    },
    {
      title: "Pro Plan",
      price: "$79",
      period: "/month",
      features: [
        {
          isCross: true,
          contents: "Unlimited access to all courses",
        },
        {
          isCross: true,
          contents: "Unlimited course materials and resources",
        },
        {
          isCross: true,
          contents: "Priority support from instructors",
        },
        {
          isCross: true,
          contents: "Course completion certificates",
        },
        {
          isCross: true,
          contents: "Ad-free experience",
        },
        {
          isCross: true,
          contents: "Access to exclusive Pro Plan community forums",
        },
        {
          isCross: true,
          contents: "Early access to new courses and updates",
        },
      ],
      isPro: true,
    },
  ];

  return (
    <>
      <div className="bg-grayBg h-screen pt-8 md:pt-32 font-be-vietnam-pro">
        <div className="pt-6 text-center">
          <div className="w-full flex justify-center">
            <div className="flex items-center justify-between bg-white py-2 px-4 rounded-md mb-4 border border-grayColor">
              <HiBolt className="h-16 w-16 bg-orange-100 p-4 rounded text-center" />
              <h5 className="text-[16px] md:text-[34px] lg:text-[36px] xl:text-[48px] font-semibold ml-3">
                <span className="text-orangeBg">Unlock</span> Your Creative
                Potential
              </h5>
            </div>
          </div>
          <div className="block md:max-w-full max-w-[280px] mx-auto">
            <h5 className="text-[24px] md:text-[28px] lg:text-3xl xl:text-[38px] font-medium tracking-tighter mt-2">
              With Online Design and Development Courses.
            </h5>
            <p className="text-[14px] md:text-[16px] xl:text-[18px] mt-3">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
          </div>
        </div>
        <div className="mt-8 flex  md:space-y-0 justify-center gap-4 text-[14px] lg:text-[14px] xl:text-[18px] font-medium font-be-vietnam-pro">
          <button className="bg-white hover:bg-orangeBg py-3 px-3 rounded-md hover:text-white border border-grayColor w-auto">
            Explore Courses
          </button>
          <button className="bg-white hover:bg-orangeBg py-3 px-3 rounded-md hover:text-white border border-grayColor w-auto">
            View Pricing
          </button>
        </div>
        <div className="mt-8 md:mt-16 justify-center items-center px-4 xl:px-0 py-4 max-w-[1280px] xl:mx-auto mx-4">
          <img src={brandContainer} alt="" className="max-w-full" />
        </div>
      </div>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ video section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

      <div className="bg-grayBg font-be-vietnam-pro">
        <div className=" flex items-center justify-center xl:mt-0 md:mt-[-300px] mt-[-480px] mx-4 max-w-[1280px] xl:mx-auto">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1280px",
              maxHeight: "480px",
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
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Benefit Section ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="bg-grayBg font-be-vietnam-pro">
        
        <div className="flex flex-col xl:pt-80 md:pt-36 pt-10 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 ">
          <h3 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold font-be-vietnam-pro text-grayH">Benefits</h3>
          <div className="md:flex">
            <div className="md:w-3/4">
              <p className="text-[14px] md:text-[16px] xl:text-[18px] text-justify font-be-vietnam-pro font-normal text-grayPara">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="w-1/4 justify-end md:flex items-center mt-4 md:mt-0">
              <button className="bg-orangeBg text-white p-3 rounded hover:bg-white hover:text-black border border-orangeBg w-auto">
                View all
              </button>
            </div>
          </div>
          <div
            className={`md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:pt-12 pt-3 space-y-4 md:space-y-0`}
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
        <div className="flex flex-col pt-16 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 font-be-vietnam-pro">
          <h3 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-grayH">Our Courses</h3>
          <div className="md:flex ">
            <div className="md:w-3/4">
              <p className="text-[14px] md:text-[16px] xl:text-[18px] text-justify font-be-vietnam-pro font-normal text-grayPara">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="w-1/4 justify-end md:flex items-center mt-4 md:mt-0">
              <button className="bg-orangeBg text-white p-3 rounded hover:bg-white hover:text-black border border-orangeBg w-auto">
                View all
              </button>
            </div>
          </div>
          <div
            className={`md:grid md:grid-cols-2 gap-4 md:pt-12 pt-3 space-y-4 md:space-y-0 `}
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

        <div className="flex flex-col pt-16 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 font-be-vietnam-pro">
          <h3 className=" text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-grayH">Our Testimonial</h3>
          <div className="rounded-lg md:flex">
            <div className="md:w-3/4">
              <p className="text-[14px] md:text-[16px] xl:text-[18px] text-justify font-normal font-be-vietnam-pro text-grayPara">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div className="w-1/4 justify-end md:flex items-center mt-4 md:mt-0">
              <button className="bg-orangeBg text-white p-3 rounded hover:bg-white hover:text-black border border-orangeBg w-auto">
                View all
              </button>
            </div>
          </div>
          <div className=" mt-10 md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
            {testimonial.map((item, index) => (
              <Testinmonial key={index} review={item.review} user={item.user} />
            ))}
          </div>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ pricing boxed ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="flex flex-col pt-16 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 font-be-vietnam-pro">
          <h3 className=" text-[28px] md:text-[38px] xl:text-[48px] font-semibold font-be-vietnam-pro text-grayH">Our Pricing</h3>
          <div className="rounded-lg md:flex">
            <div className="md:flex justify-between ">
              <p className="text-[14px] md:text-[16px] xl:text-[18px] font-be-vietnam-pro md:w-3/4 text-justify text-grayPara">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <div className="bg-white p-2 md:w-[30%] xl:w-[16%] w-1/2 mt-4 md:mt-0 rounded mb-5 flex justify-evenly items-center font-be-vietnam-pro">
                <button className="bg-white p-3 rounded hover:bg-orangeBg text-grayH hover:text-white border-2 border-grayColor  w-auto">
                  Monthly
                </button>
                <button className="bg-white  p-3 rounded hover:bg-orangeBg text-grayH hover:text-white border-2 border-grayColor  w-auto">
                  Yearly
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white md:px-2 xl:px-20 px-4 py-6 pt-5 mb-10 md:flex rounded-xl font-be-vietnam-pro">
            {pricing.map((item, index) => (
              <Pricing
                key={index}
                title={item.title}
                price={item.price}
                period={item.period}
                features={item.features}
                extras={item.extras}
              />
            ))}
          </div>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  FAQ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="flex flex-col pt-5 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 font-be-vietnam-pro">
          <div className="bg-white md:px-2 xl:px-20 px-4 py-6 pt-5 mb-10 md:flex rounded-xl">
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;
