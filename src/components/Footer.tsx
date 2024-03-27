import Image from "next/image";
import logo from "@/assets/Logo.svg";
import Arror from "@/assets/downArrow.svg";
import Facebook from "@/assets/Facebook.svg";
import Twitter from "@/assets/X.svg";
import Feed from "@/assets/Feed.svg";
const Footer = () => {
  return (
    <div className="pt-[80px] pb-[40px] lg:pt-[120px] lg:pb-[56px] ">
      <div className="flex items-center justify-start gap-x-3">
        <Image src={logo} alt="Logo" />
        <span className="text-[#36485C] text-[17px] font-[700] py-[5]">
          YOUR SITE
        </span>
      </div>
      <ul className="pt-[56px] flex flex-col gap-y-[32px]">
        <li className="text-[#36485C] flex items-center justify-between">
          Features
          <span>
            <Image src={Arror} alt="Arrow" />
          </span>
        </li>
        <li className="text-[#36485C] flex items-center justify-between">
          Pricing
          <span>
            <Image src={Arror} alt="Arrow" />
          </span>
        </li>
        <li className="text-[#36485C] flex items-center justify-between">
          Enterprise
          <span>
            <Image src={Arror} alt="Arrow" />
          </span>
        </li>
        <li className="text-[#36485C] flex items-center justify-between">
          Careers
          <span>
            <Image src={Arror} alt="Arrow" />
          </span>
        </li>
      </ul>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
        <p className="mt-[56px] text-[#5F7896] font-medium">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
        <div className="mt-[40px] flex items-center justify-center gap-x-[56px]">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Twitter} alt="Twitter" />
          <Image src={Feed} alt="Feed" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
