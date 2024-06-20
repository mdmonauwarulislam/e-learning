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
    <div className="pt-16 bg-grayColor pb-4">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 md:text-[42px] text-[22px] font-semibold md:pr-4">
          <h3 className="pt-4">Our Pricings</h3>
        </div>
        <div className="md:w-1/2 text-[12x] md:text-[16px] md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
        Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </div>
      </div>
      <div className="flex justify-center">
      <div className="bg-white p-2  mt-4 md:mt-0 rounded mb-5 flex justify-between gap-4">
                <button className="bg-orangeBg text-white p-2 rounded hover:bg-white hover:text-black border transition duration-300 w-auto">
                  Monthly
                </button>
                <button className="bg-white text-black p-2 rounded hover:bg-orangeBg hover:text-white border  transition duration-300 w-auto">
                  Yearly
                </button>
              </div>
      </div>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ pricing boxed ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <div className="flex flex-col pt-5 bg-grayColor max-w-[1280px] xl:mx-auto mx-4 ">
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
        <div className="flex flex-col pt-5 bg-grayColor max-w-[1280px] xl:mx-auto mx-4 ">
          <div className="bg-white md:px-2 xl:px-20 lg px-4 py-6 pt-5 mb-10 md:flex rounded-xl">
            <FAQ />
          </div>
        </div>
    </div>
  );
}

export default PricingPage;
