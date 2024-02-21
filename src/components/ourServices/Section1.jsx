import Button from "../buttons/Button";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Section1() {
  const [checked, setChecked] = useState(0);
  return (
    <div className=" mb-20 flex items-center justify-center bg-[url('/contactpage/background.svg')] bg-cover bg-center sm:bg-contain md:bg-cover lg:bg-contain xl:bg-cover">
      <div >
          <Image className="mt-20" width={918} height={426} alt="img" src="/ourServices/ufos.svg" />
      </div>
    </div>
  );
}
