"use client";

import Button from "@/components/buttons/Button";
import RadioButton from "@/components/elements/RadioButton";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);
  return (
    <main className="p-10 bg-black text-white">
      <h1 className="text-[100px]">
        Empowering Your Financial Future HEADading 1
      </h1>
      <Button size="normal" width="fit" outline title="Primary Button" />
      <Button
        size="normal"
        width="fit"
        outline
        title="Primary Button"
        disabled
      />
      <p className="w-96">
        Experience the seamless convergence of Web 3.0 capabilities with our
        integrated DApp browser, facilitating staking, crypto transactions,
        liquidity pool farming, and cross-chain interoperability
      </p>
      <RadioButton checked={checked} setChecked={setChecked} title="Title" />
    </main>
  );
}
