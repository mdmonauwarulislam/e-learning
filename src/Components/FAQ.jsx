/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import {
  HiOutlineXMark,
  HiOutlinePlus,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open FAQ
    } else {
      setOpenIndex(index); // Open the selected FAQ
    }
  };

  const faqs = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      link: "Enrollment Process for Different Courses",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "You can expect personalized support through various communication channels.",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Our courses are designed to be flexible, allowing you to start and complete them at your own pace.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Some courses may have prerequisites, which will be listed on the course description page.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer:
        "Yes, you can download the course materials and access them offline at your convenience.",
    },
  ];

  return (
    <div className="mx-auto md:flex justify-between w-full mt-10 font-be-vietnam-pro">
      <div className="md:w-1/2">
        <h2 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold leading-tight">Frequently Asked Questions</h2>
        <p className="text-[14px] md:text-[16px] xl:text-[18px] font-be-vietnam-pro font-normal mt-4">
          Still have any questions? Contact our Team via support@skillbridge.com
        </p>
        <button className="text-[14px] md:text-[16px] xl:text-[18px] font-be-vietnam-pro font-normal mt-8 p-3 rounded-md hover:bg-orangeBg hover:text-white border border-grayColor">See All FAQ’s</button>
      </div>
      <div className="md:w-1/2">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-6 bg-white rounded-lg border border-grayColor outline-none"
          >
            <div className="flex justify-between items-center text-left font-be-vietnam-pro">
            <span className="font-medium">{faq.question}</span>
            <span className="font-[18px]">
              {openIndex === index ? (
                <HiOutlineXMark className="p-2 rounded text-[32px] bg-[#FFF4E5]" />
              ) : (
                <HiOutlinePlus className="p-2 rounded text-[32px] bg-[#FFF4E5]" />
              )}
            </span>
            </div>
            {openIndex === index && (
            <div className=" border-t border-grayColor mt-4 font-be-vietnam-pro">
              <p className="mb-2 mt-10 text-left">{faq.answer}</p>
              {faq.link && (
                <div className="m-4 bg-grayBg p-4 rounded-md items-center">
                  <a href="#" className="flex justify-between items-center text-left">
                    {faq.link}
                    <HiOutlineArrowSmallRight className="p-2 rounded-[50%] text-[32px] bg-white cursor-pointer" />
                  </a>
                </div>
              )}
            </div>
          )}
          </button>
        
        </div>
      ))}
    </div>
    </div>
  );
}
export default FAQ;
