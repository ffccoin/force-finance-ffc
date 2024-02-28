import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (name && email && phoneNumber && message) {
      await fetch("/api/faqs", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
          phoneNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setFormSubmitted(true);
            setName("");
            setMessage("");
            setPhoneNumber("");
            setEmail("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return true;
      // Set formSubmitted to true to display confirmation message
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="mt-4 items-center justify-center rounded-2xl px-6 py-10">
        {formSubmitted && (
          <div className="mb-4 mr-auto flex gap-1 pl-[0.45rem]">
            {" "}
            <Image
              src="/contactpage/tick.svg"
              width={16}
              height={3}
              alt="img"
            />
            <p className="select-none text-wrap	 text-neutralLight">
              The form was sent successfully.
            </p>
          </div>
        )}
        <form
          className="mx-auto flex flex-col items-center justify-center space-y-3"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            required
            className="h-[60px] w-[320px] rounded-md bg-neutral pl-4 font-apfel-grotezk text-white outline-none lg:w-[413px] "
            placeholder="Name*"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 h-[60px] w-[320px] rounded-md bg-neutral  pl-4  font-apfel-grotezk text-white outline-none lg:w-[413px]"
            placeholder="Email*"
            type="email"
          />
          <input
            name="phoneNumber"
            required
            className=" h-[60px] w-[320px] rounded-md  bg-neutral  pl-4 font-apfel-grotezk text-white outline-none lg:w-[413px] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
            placeholder="Tel*"
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <div className="">
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" h-[175px] w-[320px] rounded-md bg-neutral pl-4  pt-4   font-apfel-grotezk text-white outline-none lg:w-[413px]"
              placeholder="Message..."
            />
          </div>
          <button
            type="submit"
            className={`grid h-[55px] w-[320px] place-items-center bg-primary1 font-neue-machina-bold leading-6 text-neutralDark enabled:hover:bg-darkGreen enabled:hover:text-neutralLighter lg:w-[413px]
      `}
          >
            <div className="flex gap-x-2.5">Send a Message</div>
          </button>
        </form>
      </div>
    </div>
  );
}
