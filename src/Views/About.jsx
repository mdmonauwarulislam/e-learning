/* eslint-disable react/no-unescaped-entities */
import AboutCard from "../Components/AboutCard";
import { IoMedal } from "react-icons/io5";
import { FaCrown, FaUserShield } from "react-icons/fa";
import { RiFeedbackFill, RiBookFill, RiCommunityFill } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { GiSchoolBag } from "react-icons/gi";

function About() {
  const content = [
    {
      icon: <FaCrown />,
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      icon: <IoMedal />,
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
    },
    {
      icon: <RiFeedbackFill />,
      title: "Positive Student Feedback",
      description:
        "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
    },
    {
      icon: <FaUserShield />,
      title: "Industry Partnerships",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
  ];

  const content2 = [
    {
      icon: <GiSchoolBag />,
      title: "Provide Practical Skills",
      description:
        "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
    },
    {
      icon: <RiBookFill />,
      title: "Foster Creative Problem-Solving",
      description:
        "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
    },
    {
      icon: <RiCommunityFill />,
      title: "Promote Collaboration and Community",
      description:
        "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
    },
    {
      icon: <MdLightMode />,
      title: "Stay Ahead of the Curve",
      description:
        "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
    },
  ];
  return (
    <div className="pt-16 bg-grayColor pb-4">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 md:text-[42px] text-[22px] font-semibold md:pr-4">
          <h3 className="pt-4">About Skillbridge</h3>
        </div>
        <div className="md:w-1/2 text-[12x] md:text-[16px] md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </div>
      </div>
      <div className="border max-w-[1400px] xl:mx-auto mx-4 mb-12"></div>
      <div className="max-w-[1280px] xl:mx-auto mx-4">
        <h3 className="md:text-[42px] text-[22px] font-semibold ">
          About Skillbridge
        </h3>
        <p className="text-[12x] md:text-[16px] md:py-3 mt-2 md:mt-0 text-justify">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="max-w-[1280px] xl:mx-auto mx-4 md:grid md:grid-cols-2 gap-6 space-y-4 md:space-y-0 mt-10">
        {content.map((about, index) => (
          <AboutCard
            key={index}
            icon={about.icon}
            title={about.title}
            description={about.description}
          />
        ))}
      </div>
      <div className="max-w-[1280px] xl:mx-auto mx-4 mt-20">
        <h3 className="md:text-[42px] text-[22px] font-semibold ">Our Goals</h3>
        <p className="text-[12x] md:text-[16px] md:py-3 mt-2 md:mt-0 text-justify">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact.
          <br />
          Through our carefully crafted courses, we aim to
        </p>
      </div>
      <div className="max-w-[1280px] xl:mx-auto mx-4 md:grid md:grid-cols-2 gap-6 space-y-4 md:space-y-0 mt-10">
        {content2.map((about, index) => (
          <AboutCard
            key={index}
            icon={about.icon}
            title={about.title}
            description={about.description}
          />
        ))}
      </div>
      <div className="bg-white max-w-[1280px] xl:mx-auto mx-4 mb-12 mt-20 rounded-md">
        <div className=" md:flex justify-between items-center md:py-20 ">
          
           <div className=" md:px-16 px-8 py-8 md:py-0 md:w-[75%]">
          <h2 className="md:text-[38px] text-[28px] font-semibold leading-tight">
            <span className="text-orangeBg">Together</span>, let's shape the
            future of digital innovation
          </h2>
          <p className="text-[16px] mt-2">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
       
          <div className=" pb-8 md:pb-0 md:px-16 px-8">
          <button className="bg-orangeBg text-white rounded p-2 text-[15px]">
            Join Now
          </button>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default About;
