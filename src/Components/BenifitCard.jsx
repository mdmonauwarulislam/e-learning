/* eslint-disable react/prop-types */

function BenifitCard(props) {
  return (
    <div className="bg-white p-[30px] md:p-10 xl:p-[50px] rounded-lg">

      <h4 className="flex justify-end items-center w-full text-[50px] md:text-[60px] xl:text-[80px] leading-none font-bold font-be-vietnam-pro text-grayH">0{props.id}</h4>

      <div className="w-full my-8 md:my-10 leading-none tracking-none">
        <div className="text-[20px] xl:text-[24px] font-semibold font-be-vietnam-pro text-blackH">{props.title}</div>
        <div className="text-[14px] md:text-[16px] xl:text-[18px] font-be-vietnam-pro font-normal text-blackPara mt-4">{props.disc}</div>
      </div>
      <div className="">
        <div className="flex justify-end items-center">
          <button className="text-white p-5 text-4xl rounded border-2 border-grayBg ">
            <img
              width="20"
              height="20"
              className=""
              src="https://img.icons8.com/windows/32/FF9500/up-right-arrow.png"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BenifitCard;
