import Image from "next/image";
import feature1 from "../assets/feature-1.svg";
import feature2 from "../assets/feature-2.svg";
import feature3 from "../assets/feature-3.svg";
import check from "../assets/check.svg";
import BlueButton from "../assets/blue-button.svg";
import greenButton from "../assets/green-button.svg";
import pinkButton from "../assets/pink-button.svg";

const Feature = () => {
  return (
    <section className="flex flex-col gap-y-[56px] py-[56px] lg:gap-y-[80px] lg:py-[120px]">
      {/* First Feature Section */}
      <div className="flex flex-col gap-x-6 sm:flex-row ">
        {/* Edit div for big screen */}
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="text-[#0085FF] font-medium lg:text-[18px]">
            Sales Monitoring
          </h3>
          <h1 className="text-[24px] pt-[12px] text-[#172026] font-medium lg:text-[42px] lg:leading-[58px] lg:pt-[16px] ">
            Simplify your sales <br className="hidden lg:flex" />
            monitoring
          </h1>
          <Image
            src={feature1}
            alt="Feature 01"
            className="pt-[24px] sm:hidden"
          />
          <p className="text-[#36485C] font-normal pt-[24px] lg:text-[18px] leading-[28px] lg:pt-[16px] ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-[12px] pt-[24px] lg:pt-[32px]">
            <li className="flex items-center text-[#36485C] gap-x-4 text-[18px]  ">
              <span>
                <Image src={check} alt="Tick Mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center text-[#36485C] gap-x-4 text-[18px] ">
              <span>
                <Image src={check} alt="Tick Mark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center text-[#36485C] gap-x-4 text-[18px] ">
              <span>
                <Image src={check} alt="Tick Mark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <button className="flex items-center gap-x-2 font-medium text-[#0085FF] pt-[24px] lg:text-[18px] lg:pt-[32px]">
            Learn More
            <Image src={BlueButton} alt="Learn More" />
          </button>
        </div>
        <Image
          src={feature1}
          alt="Feature1"
          className="hidden w-1/2 sm:block"
        />
      </div>

      {/* Second Feature */}
      <div className="flex flex-col gap-x-6 sm:flex-row ">
        <Image
          src={feature2}
          alt="Feature2"
          className="hidden w-1/2 sm:block"
        />
        {/* Edit div for big screen */}
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="text-[#00A424] font-medium lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="text-[24px] pt-[12px] text-[#172026] font-medium lg:text-[42px] lg:leading-[58px] lg:pt-[16px] ">
            Get in touch with your <br className="hidden lg:flex" />
            customers
          </h1>
          <Image
            src={feature1}
            alt="Feature 01"
            className="pt-[24px] sm:hidden"
          />
          <p className="text-[#36485C] font-normal pt-[24px] lg:text-[18px] leading-[28px] lg:pt-[16px] ">
            Stay on top of things and revamp your work process with our
            game changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>
          <ul className="flex flex-col gap-[12px] pt-[24px] lg:pt-[32px]">
            <li className="flex items-center text-[#36485C] gap-x-4 text-[18px]  ">
              <span>
                <Image src={check} alt="Tick Mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center text-[#36485C] gap-x-4 text-[18px] ">
              <span>
                <Image src={check} alt="Tick Mark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center text-[#36485C] gap-x-4 text-[18px] ">
              <span>
                <Image src={check} alt="Tick Mark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>
          <button className="flex items-center gap-x-2 font-medium text-[#00A424] pt-[24px] lg:text-[18px] lg:pt-[32px]">
            Learn More
            <Image src={greenButton} alt="Learn More" />
          </button>
        </div>
      </div>

      {/* Third Feature */}
      <div className="flex flex-col gap-x-6 sm:flex-row ">
        {/* Edit div for big screen */}
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="text-[#EB2891] font-medium lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="text-[24px] pt-[12px] text-[#172026] font-medium lg:text-[42px] lg:leading-[58px] lg:pt-[16px] ">
            Monitor your sites new <br className="hidden lg:flex" />
            subscribers
          </h1>
          <Image
            src={feature1}
            alt="Feature 01"
            className="pt-[24px] sm:hidden"
          />
          <p className="text-[#36485C] font-normal pt-[24px] lg:text-[18px] leading-[28px] lg:pt-[16px] ">
            Stay on top of things and revamp your work process with our
            game changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <div className="flex py-[32px] gap-x-[24px] ">
            <div className="pt-[16px] w-1/2">
              <h3 className="text-[32px] font-medium  text-[#172026]">100+</h3>
              <p className="pt-[16px] text-[#5F7896] lg:text-[18px] ">Lorem ipsum dolor sit </p>
            </div>
            <div className="pt-[16px] w-1/2"> 
              <h3 className="text-[32px] font-medium  text-[#172026]">800+</h3>
              <p className="pt-[16px] text-[#5F7896] lg:text-[18px] ">Conse adipiscing elit </p>
            </div>
          </div>
          <button className="flex items-center gap-x-2 font-medium text-[#EB2891] pt-[24px] lg:text-[18px] lg:pt-[32px]">
            Learn More
            <Image src={pinkButton} alt="Learn More" />
          </button>
        </div>
        <Image
          src={feature3}
          alt="Feature3"
          className="hidden w-1/2 sm:block"
        />
      </div>
    </section>
  );
};

export default Feature;