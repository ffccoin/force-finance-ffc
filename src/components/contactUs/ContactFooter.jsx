import React from "react";

export default function ContactFooter() {
  return (
    <div className="over flex flex-col items-center justify-center">
      <div className="overflow-hidden text-white font-neue-machina">
        <p className="ml-8 mb-6 text-[38px] font-[800]">NEED HELP?</p>
        <div className="flex flex-wrap mb-20">
        <div className=" ml-8 mb-8 flex w-[413px]">
          <img
            src={"/contactpage/chat.svg"}
            alt=""
            className="h-[80px] w-[80px] mt-2"
          />
          <div className="flex flex-col ml-6">
            <p className="font-[800] text-[21px]">24/7 Chat Support</p>
            <p className="font-[400] text-[16px] font-apfel-grotezk my-2 text-neutralLight">Get 24/7 chat support with our friendly customer service agents at your service.</p>
            <p className="font-[400] text-[16px] text-primary1 font-neue-machina">Chat now {'>'}</p>
          </div>
        </div>
        <div className="ml-8 mb-8 flex w-[413px]">
          <img
            src={"/contactpage/faq.svg"}
            alt=""
            className="h-[80px] w-[80px] mt-2"
          />
          <div className="flex flex-col ml-6">
            <p className="font-[800] text-[21px]">FAQs</p>
            <p className="font-[400] text-[16px] font-apfel-grotezk my-2 text-neutralLight">View FAQs for detailed instructions on specific features.</p>
            <p className="font-[400] text-[16px] text-primary1 font-neue-machina">Learn more {'>'}</p>
          </div>
        </div>
        <div className="ml-8 mb-8 flex w-[413px]">
          <img
            src={"/contactpage/blog.svg"}
            alt=""
            className="h-[80px] w-[80px] mt-2"
          />
          <div className="flex flex-col ml-6">
            <p className="font-[800] text-[21px]">Blog</p>
            <p className="font-[400] text-[16px] font-apfel-grotezk my-2 text-neutralLight">Stay up to date with the latest stories and commentary.</p>
            <p className="font-[400] text-[16px] text-primary1 font-neue-machina">Learn more {'>'}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
