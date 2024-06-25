
function AboutCard(about) {
  return (
    <div className='bg-white p-[30px] md:p-10 xl:p-[50px] rounded-md font-be-vietnam-pro'>
      <div className='p-3 text-[30px] md:text-[36px] border border-OrangeBoreder rounded-md bg-[#FFF4E5] text-orangeBg w-16 h-16 flex justify-between items-center'>{about.icon}</div>
      <h4 className='text-[18px] md:text-[20px] xl:text-[24px] text-blackH font-medium mt-4 '>{about.title}</h4>
      <p className="text-[14px] md:text-[16px] xl:text-[18px] text-blackPara py-1 mt-2 md:mt-0 text-justify">{about.description}</p>

    </div>
  )
}

export default AboutCard