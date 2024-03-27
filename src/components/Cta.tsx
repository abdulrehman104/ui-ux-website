import Image from "next/image";
// import pinkButton from "../assets/pink-button.svg";
import arrow from "../assets/arrow.png";
const Cta = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full py-[56px] px-[32px] rounded-2xl text-center lg:mt-[120px] lg:py-[88px] lg:px-[324px] ">
      <h1 className="text-[32px] text-white font-medium lg:text-[56px] ">
        Monitor your website <br /> like a pro
      </h1>
      <p className="pt-6 text-white lg:text-[18px] lg:pt-[48px]">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>
      <div className="mt-[40px] mb-[56px] flex flex-col items-center lg:mt-[56px] lg:flex-row lg:justify-center lg:gap-x-[40px]">
        <button className="text-[18px] text-[#EB2891] text-center py-4 px-8 bg-white font-medium rounded-xl w-fit">
          Try For Free
        </button>
        <button className="flex mt-8 gap-x-3 text-[18px] text-[#FFFFFF] font-medium lg:mt-0">
          Contact Sales
          <span>
            <Image src={arrow} alt="Arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
