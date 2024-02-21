

export default function AboutHeader() {
  return (
    <div className="flex items-center w-screen justify-center">
      <div className="flex h-[350px] w-[540px] items-center justify-center bg-[url('/aboutpage/background.svg')] bg-no-repeat bg-cover bg-center sm:bg-contain md:h-[700px] md:w-[1040px] md:bg-cover lg:h-[1100px] lg:w-[1440px] lg:bg-contain xl:bg-cover">
        <div className="flex w-full h-screen ml-[50px] md:ml-[150px] lg:ml-[200px] flex-col justify-center items-center">
          <div className="relative h-[812px] w-[91%] sm:h-[611px] md:h-[952px] md:w-full">
            <div className="absolute left-[2%] top-[5%] flex w-[79%] flex-col items-center justify-start">
              <div className="flex w-full flex-col items-center justify-center gap-5">
                <div className="flex w-full mt-[200px] sm:mt-[120px] md:mt-24 lg:mt-[-80px] xl:mt-[-100px] flex-col items-center justify-center">
                  <p
                    className="text-primary1 text-center uppercase font-apfel-grotezk tracking-[1.60px]"
                    
                  >
                    First order and you’ll get up to $10 in free BTC as a reward
                  </p>
                  <p className="text-white-A700 mt-4 font-neue-machina-bold w-full text-center text-[20px] md:text-[56px] uppercase md:leading-[75.00px]">
                    A Trusted and Secure Web 3.0 Financial DeFi Solution
                  </p>
                  <div className="mt-[26px] flex w-[64%] flex-col items-center justify-center gap-[25px] md:w-full lg:flex-row">
                    <div className="font-apfel-grotezk flex w-[78%] flex-col items-center justify-start md:w-full ">
                      <div className="flex w-full flex-col items-center justify-center md:gap-10 md:flex-row">
                        <div className="bg-gray-900_02 light_green_A200_38_white_A700_00_border w-[285px] flex flex-col items-center justify-start rounded-[10px] border border-solid p-3">
                          <div className="flex w-[94%] flex-row items-center justify-between md:w-full pr-4 lg:pr-0">
                            <div className="flex flex-col items-start justify-start">
                              <p className="text-[#898990] font-apfel-grotezk text-[16px] text-base">
                                You have
                              </p>
                              <p className="mt-[3px] text-base text-white font-apfel-grotezk text-[16px]">
                                $42.984
                              </p>
                            </div>
                            <div className="flex text-white font-apfel-grotezk text-[16px] w-[35%] flex-row items-center justify-between">
                            
                              <p className="bg-[#7D32F9] text-white-A700 flex h-[24px] w-[24px] p-2 mr-1 pb-2.5 items-center justify-center rounded-xl text-center text-base">
                                $
                              </p>
                              <p className="text-white-A700 text-base">USD</p>
                              <img
                                className="h-6 w-6"
                                src="images/img_iconframe.svg"
                                alt="iconframe"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-6 w-6 rotate-90 md:rotate-0  my-2 md:my-0"
                          src="images/img_share.svg"
                          alt="share"
                        />
                        <div className="bg-gray-900_02 light_green_A200_33_white_A700_00_border w-[285px] flex flex-col items-center justify-end rounded-[10px] border border-solid p-3">
                          <div className="flex w-[99%] flex-col items-center justify-start md:w-full pr-4 lg:pr-0">
                            <div className="flex w-full flex-row items-center justify-between">
                              <div className="flex flex-col items-start justify-start">
                                <p className="text-[#898990] font-apfel-grotezk text-[16px] text-base">
                                  You get
                                </p>
                                <p className="text-base text-gray-100">0.95</p>
                              </div>
                              <div className="flex text-white font-apfel-grotezk text-[16px] w-[35%] flex-row items-center justify-between">
                            
                              <p className="bg-orange-600 text-white-A700 flex h-[24px] w-[24px] p-2 mr-1 pb-2.5 items-center justify-center rounded-xl text-center text-base">
                              ฿
                              </p>
                              <p className="text-white-A700 text-base">BTC</p>
                              <img
                                className="h-6 w-6"
                                src="images/img_iconframe.svg"
                                alt="iconframe"
                              />
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="font-neue-machina bg-primary1 w-[155px] h-[65px] text-black flex justify-center items-center my-[3px] min-w-[154px] cursor-pointer text-center text-base font-extrabold md:mt-0"
                      shape="square"
                      color="light_green_A200"
                      size="lg"
                      variant="fill"
                    >
                      Buy Now
                    </div>
                  </div>
                </div>
                <div className="flex w-[79%] flex-col items-center justify-start gap-2.5 md:w-full">
                  <p className=" text-base text-[#898990] font-apfel-grotezk text-[16px]">We accept</p>
                  <img
                    className="h-[30px]"
                    src="images/img_group9342.svg"
                    alt="group9342"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



