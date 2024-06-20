
function AboutCard(about) {
  return (
    <div className='bg-white px-8 py-8 rounded-md'>
        <div className='p-3 text-[30px] border border-OrangeBoreder rounded-md bg-[#FFF4E5] text-orangeBg w-14 flex justify-between'>{about.icon}</div>
        <h4 className='md:text-[24px] text-[18px] font-semibold mt-4 '>{about.title}</h4>
        <p className="text-[12x] md:text-[16px] py-1 mt-2 md:mt-0 text-justify">{about.description}</p>

    </div>
  )
}

export default AboutCard