/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from 'react';
import axios from 'axios';
import FAQ from "../Components/FAQ";
import Pricing from "../Components/Pricing";
import AdminLogin from '../components/AdminLogin';

function PricingPage() {
  const [pricing, setPricing] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await axios.get('/api/pricing');
        setPricing(response.data);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchPricing();
  }, []);

  const updatePlan = async (title, updatedPlan) => {
    try {
      await axios.put(`/api/pricing/${title}`, updatedPlan, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPricing(pricing.map(plan => (plan.title === title ? updatedPlan : plan)));
    } catch (error) {
      console.error("Error updating pricing plan:", error);
    }
  };

  return (
    <div className="pt-16 pb-4 bg-grayBg font-be-vietnam-pro">
      {!token ? (
        <AdminLogin setToken={setToken} />
      ) : (
        <>
          <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
            <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-grayH">
              <h3 className="">Our Pricings</h3>
            </div>
            <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4  mt-2 md:mt-0 text-justify">
              Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-4 p-3 mt-4 mb-5 bg-white rounded md:mt-0 justify-evenly font-be-vietnam-pro">
              <button className="w-auto p-3 bg-white border-2 rounded hover:bg-orangeBg text-grayH hover:text-white border-grayColor">
                Monthly
              </button>
              <button className="w-auto p-3 bg-white border-2 rounded hover:bg-orangeBg text-grayH hover:text-white border-grayColor">
                Yearly
              </button>
            </div>
          </div>

          <div className="flex flex-col pt-5 bg-grayBg max-w-[1280px] xl:mx-auto mx-4 ">
            <div className="px-4 py-6 pt-5 mb-10 bg-white md:px-2 xl:px-20 lg md:flex rounded-xl">
              {pricing.map((item, index) => (
                <Pricing
                  key={index}
                  title={item.title}
                  price={item.price}
                  period={item.period}
                  features={item.features}
                  updatePlan={updatePlan}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center max-w-[1280px] xl:mx-auto mx-4 ">
            <div className="w-full px-4 mb-20 ">
              <FAQ />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PricingPage;
