/* eslint-disable react/no-unescaped-entities */
import ContactCard from "../Components/ContactCard";

function Contact() {
  return (
    <div className="pt-16 bg-grayColor pb-4">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 md:text-[42px] text-[22px] font-semibold md:inline md:pr-4">
          <h3>Contact Us </h3>
        </div>
        <div className="md:w-1/2 text-[12x] md:text-[16px] md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </div>
      </div>
      <div className="border border-gray-200 mx-auto max-w-[1450px] "></div>
      <div className="mt-10 px-4">
        <ContactCard/>
      </div>
    </div>
  );
}

export default Contact;
