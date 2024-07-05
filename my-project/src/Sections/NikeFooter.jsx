import React from "react";
import { copyrightSign } from "../assets/icons";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";
import { arrowRight } from "../assets/icons";
import { footerLogo } from "../assets/images";

const NikeFooter = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="sm:max-w-sm mt-6 font-montserrat leading-7 text-base font-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex flex-1 gap-5 items-center">
            {socialMedia.map((Social) => (
              <div className="justify-center flex items-center bg-white w-12 h-12 rounded-full">
                <img src={Social.src} alt={Social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((footLink) => (
            <div key={footLink} className="">
              <h3 className="mb-6 font-medium font-montserrat text-2xl text-white-200 leading-normal text-white">{footLink.title}</h3>
              <ul >
                {footLink.links.map((link)=>(
                  <li className="leading-normal font-base font-montserrat mt-3 cursor-pointer hover:text-slate-gray text-white-400" key={link.name}>
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center text-palanquin text-lg">
        <div className="flex flex-1 items-center gap-2 font-montserrat cursor-pointer justify-start">
          <img src={copyrightSign} className="px-2" />
          <p> Copyright. All rights reserved.</p>
        </div>
        <div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default NikeFooter;
