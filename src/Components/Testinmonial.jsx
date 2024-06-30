/* eslint-disable react/prop-types */
import Logo from "../assets/Image/Logo.png";

function Testinmonial(props) {
  return (
    <div className="font-be-vietnam-pro">
      <div className="bg-white p-[30px] md:p-10 xl:p-[50px] rounded-t-lg border-2 border-grayColor border-b-0">
        <div className="">
          <p className="text-[14px] md:text-[16px] xl:text-[18px] text-blackPara text-justify font-normal">{props.review}</p>
        </div>
      </div>
      <div className="bg-white px-[30px] md:px-10 xl:px-[50px] rounded-b-lg border-2 border-grayColor">
        <div className="flex justify-between py-[30px]">
          <div className="flex items-center justify-center space-x-2 text-center h-11">
            <img src={Logo} alt="" className="w-12 h-12" />
            <p className="font-semibold text-[14px] md:text-[16px] xl:text-[18px] text-blackH">{props.user}</p>
          </div>
          <button className="border-grayColor border-2 p-3 rounded-md text-blackPara font-medium text-[12px] md:text-[16px] xl:text-[18px] bg-grayBg">
            Read Full story
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testinmonial;
