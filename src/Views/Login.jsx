import { useRef } from 'react';
import Testinmonial from '../Components/Testinmonial';
import LoginCard from '../Components/LoginCard';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

function Login() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      review:
        "Very good coursework around your existing commitments and obligations.",
      user: "Monauwarul",
    },
    {
      review: "The course content is comprehensive and easy to follow.",
      user: "Ali",
    },
    {
      review: "I was able to learn at my own pace and the support was great!",
      user: "Aisha",
    },
    {
      review: "Highly recommend this platform for anyone looking to improve their skills.",
      user: "Rashid",
    },
  ];

  return (
    <div className="pt-16 pb-4 bg-grayBg font-be-vietnam-pro">
      <div className="md:flex md:flex-row sm:flex-col justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-[55%] md:pr-10 pr-0 md:order-1 order-2">
          <div className="md:mr-16">
            <div className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-grayH">
              <h3 className="pt-4">Students Testimonials</h3>
            </div>
            <div className="text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 mt-2 md:mt-0 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, vero, laborum optio harum ad esse facere nesciunt inventore explicabo eveniet eum animi quae! Quia mollitia, obcaecati aut iusto provident similique.
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            navigation={true}
            modules={[Navigation]}
            className="pt-10 "
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Testinmonial review={item.review} user={item.user} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-3 mt-4 float-end">
            <FaArrowLeft
              className="p-4 border rounded-md text-[52px] bg-white cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <FaArrowRight
              className="p-4 border rounded-md text-[52px] bg-white cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
        <div className="md:w-[45%] md:pl-10 md:order-2 order-1 md:mt-0 mt-24">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}

export default Login;
