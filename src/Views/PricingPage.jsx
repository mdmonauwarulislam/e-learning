/* eslint-disable react/no-unescaped-entities */
import FAQ from "../Components/FAQ";
import Pricing from "../Components/Pricing";


function PricingPage() {
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
    <div className="pt-16 bg-grayBg pb-4 font-be-vietnam-pro">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-grayH">
          <h3 className="">Our Pricings</h3>
        </div>
        <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4  mt-2 md:mt-0 text-justify">
          Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white p-3  mt-4 md:mt-0 rounded mb-5 flex justify-evenly gap-4 font-be-vietnam-pro">
          <button className="bg-white p-3 rounded hover:bg-orangeBg text-grayH hover:text-white border-2 border-grayColor  w-auto">
            Monthly
          </button>
          <button className="bg-white p-3 rounded hover:bg-orangeBg text-grayH hover:text-white border-2 border-grayColor  w-auto">
            Yearly
          </button>
        </div>
      </div>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ pricing boxed ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <div className="flex flex-col pt-5 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 ">
        <div className="bg-white md:px-2 xl:px-20 lg px-4 py-6 pt-5 mb-10 md:flex rounded-xl">
          {pricing.map((item, index) => (
            <Pricing
              key={index}
              title={item.title}
              price={item.price}
              period={item.period}
              features={item.features}
            />
          ))}
        </div>
      </div>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  FAQ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <div className="flex flex-col pt-5 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 ">
        <div className="bg-white md:px-2 xl:px-20 lg px-4 py-6 pt-5 mb-10 md:flex rounded-xl">
          <FAQ />
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
