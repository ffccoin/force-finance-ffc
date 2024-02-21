'use client'
import React, { useState} from 'react'

export default function Accordion({ ques, ans}) {
    const [check, setCheck] = useState(0);
    const changeCheck = () => {
        if(check == 0){
            setCheck(1);
        }
        else if(check == 1){
            setCheck(0);
        }
    }
  return (
    <div onClick={changeCheck} className={`cursor-pointer flex flex-col justify-center items-start md:w-[400px] lg:w-[500px] xl:w-[750px] mr-8 ${check == 0? "mb-5" : "mb-8"}`}>
      <hr className={`h-px w-full ${check == 0? "bg-[#898990]": "bg-primary1"} mb-8`} />
      <p  className={`text-[16px] font-neue-machina-bold ${check == 0? "text-[#ffffff]" : "text-primary1"} mb-4`}>{ques}</p>
      <p className={`text-[16px] font-apfel-grotezk text-[#898990] ${check == 0? "hidden": "visible"} `}>{ans}</p>
    </div>
  )
}
