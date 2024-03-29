import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { aboutData } from "@/constants";
import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const AboutLocation = () => {
  return (
     <section className="mt-10 bg-white px-4 py-10 font-poppins text-ui_primary md:px-20 md:py-[100px] lg:px-40">
      <h1 className=" pb-20 text-center text-2xl font-extrabold md:text-4xl">
     Locations    
       </h1>
      <div className="flex -mt-40 flex-col items-center md:mb-5 px-10 md:px-0">
        <div className="py-40 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden  px-5 py-5 text-center border-2 border-blue-950 transition-transform hover:scale-105 hover:border-white hover:bg-white"
            >
              <div className="flex items-center justify-center ">
               <Image
              alt=""
              width="900"
              height="200"
              src={item.image}
               />     
              </div>
               <div className="flex items-center justify-center ">
               <h3 className="ml-4 text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.title}
                </h3>
                </div>
                  <div className="flex items-center justify-center ">
                  <FiPhoneCall className="text-navyBlue" size={24} />
                <h3 className="ml-4 text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.phone}
                  </h3>
                  </div>
                  <div className="flex items-center justify-center ">
                    <BsEnvelope className="text-navyBlue" />
                 <h3 className="ml-4 text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.contact}
               </h3>
               </div>
                  <div className="flex items-center justify-center ">
                     <CiLocationOn className="text-navyBlue" size={84} />
              <p className="ml-4 text-sm md:text-base">{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutLocation;
