import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

export default function Home() {
  return (
    <main className="p-10 text-white">
      <h1 className="text-[100px]">
        Empowering Your Financial Future HEADading 1
      </h1>
      <Button size="normal" width="fit" outline title="Primary Button" />
      <SecondaryButton
        size="normal"
        width="fit"
        outline
        title="Secondary Button"
      />
      <Button
        size="normal"
        width="fit"
        outline
        title="Primary Button"
        disabled
      />
      <Button
        size="normal"
        width="fit"
        outline
        title="Primary Button"
        icon={bag}
      />
      <p className="w-96">
        Experience the seamless convergence of Web 3.0 capabilities with our
        integrated DApp browser, facilitating staking, crypto transactions,
        liquidity pool farming, and cross-chain interoperability
      </p>
    </main>
  );
}

const bag = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 9H20L19.1654 18.1811C19.0717 19.2112 18.208 20 17.1736 20H6.82643C5.79202 20 4.92829 19.2112 4.83464 18.1811L4 9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
