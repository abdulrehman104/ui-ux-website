import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Menu from "@/assets/Menu.svg";
import User from "@/assets/User.svg";
import Link from "next/link";

const navLinks = [
  { key: 1, value: "Features" },
  { key: 2, value: "Pricing" },
  { key: 3, value: "Enterprise" },
  { key: 4, value: "Careers" },
];

const Navbar = () => {
  return (
    // First, we defined the width of this container using w-full class, then we applied flex to make all the items in this navigation horizontal. After that, we used justify-between to make all our items centered in the container and have space between them. Then, by using px-20px, we indicated that we need 20 pixels of padding on the x-axis. Similarly, with py-16px, we specified that we need 16 pixels of padding on the y-axis. This completed our layout for mobile devices.

    // for large devices
    //  We instructed to apply lg:container if the device is large, which essentially centers our content on the page. Then we added mx-auto to horizontally center our content according to the parent element. After that, we specified py-24px for all devices after large devices, which adds 24 pixels of padding on the y-axis.

    <nav className="w-full flex items-center justify-between px-[20px] py-[16px] lg:container mx-auto lg:py-[24px] ">

    {/* By applying flex to this <div>, it will display its content horizontally, and using items-center will center the items within the <div>.  */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={33} height={35} />
      
        
        {/* In this <div>, we specified that when the device is mobile, these links should be hidden, and when it's a large device, they should become flex with a padding of pl-74px, meaning they should be 74 pixels away from the logo on the right side, and there should be a gap of 56 pixels between these links.  */}
        <div className="hidden lg:flex lg:pl-[74px] gap-[56px]">
          {navLinks.map((index) => (
            <Link
              href="/"
              key={index.key}
              className="text-[#36485C] text-[16px] font-medium"
            >
              {index.value}
            </Link>
          ))}
        </div>
      </div>

      {/* The items within this `<div>` will be set to flex and centered, with a gap of 56 pixels between them.  */}
      <div className="flex items-center gap-[56px]">

        {/* The `<span>` element should be hidden on mobile devices and become flex on large devices, then text content should be added to it. */}
        <span className="hidden lg:flex text-[16px] text-[#36485C] font-medium  ">
          Open an Account
        </span>

        {/* The items within this `<div>` will be set to flex, centered, and there will be a gap of 20 pixels on the x-axis between them.*/}
        <div className="flex  items-center gap-x-[20px]">
          <Image src={User} alt="User" width={32} height={32} />

          {/* In this, we specified that the buttons should be hidden on mobile devices and become block elements on large devices, then we added text properties to them.  */}
          <button className="hidden lg:block text-[#36485C] font-medium text-[16px]">
            Sign In
          </button>
        </div>

        {/* Here, we simply displayed the hamburger icon, which will be shown on our mobile devices.  */}
        <Image
          src={Menu}
          alt="Menu"
          width={32}
          height={32}
          className="lg:hidden "
        />
      </div>
    </nav>
  );
};

export default Navbar;
