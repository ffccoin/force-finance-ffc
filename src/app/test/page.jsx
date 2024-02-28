import Image from "next/image";
import React from "react";

const TestPage = () => {
  return (
    <Image src="/test.svg" width={1000} height={1000} alt="img" />
  );
};

export default TestPage;
