import Image from "next/image";
import arrow from "@/assets/arrow.svg";
import gradient from "@/assets/Gradient.svg";
import hero from "@/assets/Image.svg";
import Google from "@/assets/Google.svg";
import Slack from "@/assets/Slack.svg";
import Truspilot from "@/assets/Trustpilot.svg";
import Cnn from "@/assets/CNN.svg";
import Cluth from "@/assets/Clutch.svg";

const images = [
  { id: 1, alt: "Google", src: Google },
  { id: 1, alt: "Slack", src: Slack },
  { id: 1, alt: "Truspilot", src: Truspilot },
  { id: 1, alt: "Cnn", src: Cnn },
  { id: 1, alt: "Cluth", src: Cluth },
];

const Hero = () => {
  return (
    // In this, we applied padding to our `<div>` element, 4 pixels from the top for mobile devices and 12 pixels for larger devices. Additionally, we used `justify-center` to ensure that everything is centered horizontally.
    <div className="pt-4 lg:pt-12 justify-center">
      {/* In this, we simply assigned `px-20px` for mobile devices and `px-290px` for larger devices. */}
      <div className="px-[20px] lg:px-[290px] ">
        {/* In this, we've designed our `<h1>` element for both mobile and larger devices. */}
        <h1 className="text-center text-[32px] text-[#172026] leading-[40px] font-medium lg:text-[64px] lg:leading-[72px]">
          Start monitoring your website like a pro
        </h1>

        {/* In this, we've designed our `<p>` element for both mobile and larger devices. */}
        <p className="text-[#36485C]  pt-[38px] lg:text-[18px] lg:leading-[28px] text-center ">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things. Revamp your work process with our game-changing feature. Boost
          productivity and efficiency.
        </p>

        {/* In this `<div>`, every element inside will have a flex direction, with their width set to full in comparison to the parent element's width. Additionally, we've added a padding of 38 pixels from the top in the upper `<div>`, justified the elements to the center, and provided a gap of 10 pixels between them.  */}
        <div className="flex w-full pt-[38px] justify-center gap-[10px]">
          {/* In this, we've given the button a background color and set its width to half of the `<div>`'s width. Additionally, we've specified padding on the x-axis and y-axis. The text color is set to white, and the button is rounded. Furthermore, we want it to have a width that fits its content on large screens.  */}
          <button className="bg-[#4328EB]  w-1/2 px-[32px] py-[18px] text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>

          {/* In this case, since we have 2 elements, we'll center them vertically and horizontally using `items-center` and `justify-center`. Additionally, we'll provide a gap between them on the x-axis. On larger devices, we'll set their width to match the content width. */}
          <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={arrow} alt="Arrow" />
            </span>
          </button>
        </div>
      </div>

      {/* In this, we'll give it a `position: relative` so that its position behaves like the normal document flow. Then, we'll set its width and height to 100% of the parent element's dimensions using flex. Finally, we'll align everything to the center using `justify-center`.    */}
      <div className="relative flex w-full h-full justify-center ">
        <Image
          src={gradient}
          alt="Gradient"
          // In this, we've set the width to be equal to the parent element's width and given it a minimum height of 500px. Then, we've applied `object-cover` to ensure that the image covers the container entirely.
          className="w-full min-h-[500px] object-cover "
        />

        {/* The reason for using absolute positioning is that this div's position is relative to its parent element, allowing me to adjust it accordingly. For instance, I've given it a `bottom` value of 5, set its width to match the parent element, applied flex, and set it to display as a column so that it appears in a column layout. Finally, I've centered it.  */}
        <div className="absolute w-full bottom-5 flex flex-col items-center  ">
          <Image
            src={hero}
            alt="Hero Image"
            // We've applied a margin-left (`ml`) to this image, which will have the opposite effect. Additionally, we've set its height. To make it responsive, we'll add media queries.
            className="ml-[-12px]  h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%] "
          />

          {/* We've set its direction to flex, making it a column. Then, we didn't center it and made its width full. On large devices, we centered it with some padding using a container. We changed its display to flex, arranged in a row, justified between them, and added 20 pixels padding on the x-axis. */}
          <div className="flex flex-col items-center w-full  lg:container lg:flex-row lg:justify-between lg:px-20 ">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 justify-center items-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              {/* Yha pr ak map function chale ga jo hamare sare images ko render kr dega  */}
              {images.map((img) => (
                <Image src={img.src} alt={img.alt} key={img.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
