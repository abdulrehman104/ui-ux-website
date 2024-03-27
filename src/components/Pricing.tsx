import Image from "next/image";
import check from "@/assets/check.svg";
import check1 from "@/assets/check1.svg";

const Pricing = () => {
  return (
    <>
      <div className="py-[48px] lg:py-[60px]">
        <div>
          <h1 className="text-[24px] text-[#172026] font-medium text-center lg:text-[42px]">
            Flexible plans for you
          </h1>
          <p className="pt-[16px] pb-[40px] text-[#36485C] text-center lg:text-[18px] lg:pb-[64px]">
            No hidden fees!
          </p>
        </div>
        <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
          {/* DIV ONE  */}
          <div className="bg-[#F5F4FF] w-full rounded-[8px] flex flex-col p-[24px] lg:justify-between">
            <h3 className="text-[18px] text-[#4328EB] font-medium lg:text-[20px]">
              Free Trial
            </h3>
            <p className="pt-3 text-[#36485C] lg:text-[18px]">
              Perfect for testing the waters
            </p>
            <h2 className="text-[24px] pt-4 font-medium lg:text-[32px]">
              $0
              <span className="text-[24px] text-[#5F7896] font-medium ">
                /mo
              </span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4">
              <li className="flex gap-x-[16px] items-center ">
                <Image src={check} alt="check" height={16} width={16} />
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex gap-x-[16px] items-center ">
                <Image src={check} alt="check" height={16} width={16} />
                Lorem ipsum dolor sit amet
              </li>

              <li className="flex gap-x-[16px] items-center ">
                <Image src={check} alt="check" height={16} width={16} />
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <button className="mt-[16px] rounded-[4px] py-[14px] px-[30px] bg-[#FFFFFF] text-[#4328EB] font-medium">
              Start Trial
            </button>
          </div>

          {/* DIV TWO */}
          <div className="bg-[#4328EB] w-full rounded-[8px] flex flex-col p-[24px] lg:justify-between">
            <h3 className="text-[18px] text-white font-medium lg:text-[20px] ">
              Business
            </h3>
            <p className="pt-3 text-[#F4F8FA] lg:text-[18px]">
              Perfect for small businesses
            </p>
            <h2 className="text-[24px] pt-4 font-medium text-white lg:text-[32px]">
              $500
              <span className="text-[24px] text-[#F4F8FA] font-medium ">
                /mo
              </span>
            </h2>
            <ul className="flex flex-col gap-y-2 pt-4">
              <li className="flex gap-x-[16px] items-center text-[#F4F8FA]">
                <Image src={check1} alt="check" height={16} width={16} />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-[16px] items-center text-[#F4F8FA]">
                <Image
                  src={check1}
                  alt="check"
                  height={16}
                  width={16}
                  className=""
                />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-[16px] items-center text-[#F4F8FA]">
                <Image
                  src={check1}
                  alt="check"
                  height={16}
                  width={16}
                  className=""
                />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-[16px] items-center text-[#F4F8FA]">
                <Image
                  src={check1}
                  alt="check"
                  height={16}
                  width={16}
                  className=""
                />
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex gap-x-[16px] items-center text-[#F4F8FA]">
                <Image
                  src={check1}
                  alt="check"
                  height={16}
                  width={16}
                  className=""
                />
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <button className="mt-[16px] rounded-[4px] py-[14px] px-[30px] bg-[#FFFFFF] text-[#4328EB] font-medium">
              Get Started
            </button>
          </div>

          {/* DIV THREE */}
          <div className="bg-[#F5F4FF] w-full rounded-[8px] flex flex-col p-[24px] lg:justify-between">
            <h3 className="text-[18px] text-[#4328EB] font-medium lg:text-[20px]">
              Enterprise
            </h3>
            <p className="pt-3 text-[#36485C] lg:text-[18px]">
              Perfect for big companies
            </p>
            <h2 className="text-[24px] pt-4 font-medium lg:text-[32px]">
              Custom
            </h2>
            <p className="text-[#36485C] leading-6 pt-[16px] pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <p className="pt-[10px] text-[#36485C] leading-6 pb-[16px] lg:pb-[32px] ">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <button className="mt-[16px] rounded-[4px] py-[14px] px-[30px] bg-[#FFFFFF] text-[#4328EB] font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
