/* eslint-disable react/no-unescaped-entities */
import ContactCard from "../Components/ContactCard";

function Contact() {
  return (
    <div className="pt-16 bg-grayBg pb-4 font-be-vietnam-pro">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-grayH">
          <h3>Contact Us </h3>
        </div>
        <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </div>
      </div>
      <div className="border-2 border-grayColor mx-auto max-w-[1450px] "></div>
      <div className="mt-16 mb-10">
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
