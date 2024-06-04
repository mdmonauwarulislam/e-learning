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
    setOpenIndex(index === openIndex ? null : index);
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
    <div className="mx-auto md:flex justify-between w-full mt-10">
      <div className="md:w-[40%]">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="mb-8">
          Still have any questions? Contact our Team via support@skillbridge.com
        </p>
      </div>
      <div className="md:w-[60%]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-6 bg-white shadow-md rounded-lg focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="font-[18px]">
                {openIndex === index ? (
                  <HiOutlineXMark className="p-1 rounded text-[24px] bg-[#FFF4E5] " />
                ) : (
                  <HiOutlinePlus className="p-1 rounded text-[24px] bg-[#FFF4E5]" />
                )}
              </span>
            </button>
            {openIndex === index && (
                <div className="p-4 border rounded-lg">
                    <p className="mb-2">{faq.answer}</p>
                    {faq.link && (
                        <div className="m-4 bg-gray-200 p-4 rounded-md items-center ">
                            <a href="#" className="flex justify-between">
                                {faq.link}
                                <HiOutlineArrowSmallRight className="p-1 rounded text-[24px] bg-white cursor-pointer" />
                            </a>
                           
                        </div>
                    )}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FAQ;
