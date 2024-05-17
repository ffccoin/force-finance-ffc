"use client";
import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";

export default function Accordion({ ques, ans }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`w-full border-t ${open ? "border-primary1 pb-3 text-primary1" : "border-[#8989904D] pb-9"} pt-9 text-start`}
          >
            {ques}
          </Disclosure.Button>
          <Disclosure.Panel className="pb-8 text-gray-500">
            {ans}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
