

export default function ContactFooter() {
  return (
    <div className="ml-10 flex flex-col items-center justify-center xl:ml-0">
      <div className="overflow-hidden font-neue-machina text-white">
        <p className="mb-6 ml-8 text-[38px] font-[800]">NEED HELP?</p>
        <div className="mb-20 flex flex-wrap">
          <div className=" mb-8 ml-8 flex w-[413px]">
            <img
              src={"/contactpage/chat.svg"}
              alt=""
              className="mt-2 h-[80px] w-[80px]"
            />
            <div className="ml-6 flex flex-col">
              <p className="text-[21px] font-[800]">24/7 Chat Support</p>
              <p className="my-2 font-apfel-grotezk text-[16px] font-[400] text-neutralLight">
                Get 24/7 chat support with our friendly customer service agents
                at your service.
              </p>
              <p className="font-neue-machina text-[16px] font-[400] text-primary1">
                Chat now {">"}
              </p>
            </div>
          </div>
          <div className="mb-8 ml-8 flex w-[413px]">
            <img
              src={"/contactpage/faq.svg"}
              alt=""
              className="mt-2 h-[80px] w-[80px]"
            />
            <div className="ml-6 flex flex-col">
              <p className="text-[21px] font-[800]">FAQs</p>
              <p className="my-2 font-apfel-grotezk text-[16px] font-[400] text-neutralLight">
                View FAQs for detailed instructions on specific features.
              </p>
              <p className="font-neue-machina text-[16px] font-[400] text-primary1">
                Learn more {">"}
              </p>
            </div>
          </div>
          <div className="mb-8 ml-8 flex w-[413px]">
            <img
              src={"/contactpage/blog.svg"}
              alt=""
              className="mt-2 h-[80px] w-[80px]"
            />
            <div className="ml-6 flex flex-col">
              <p className="text-[21px] font-[800]">Blog</p>
              <p className="my-2 font-apfel-grotezk text-[16px] font-[400] text-neutralLight">
                Stay up to date with the latest stories and commentary.
              </p>
              <p className="font-neue-machina text-[16px] font-[400] text-primary1">
                Learn more {">"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
