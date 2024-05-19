"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/headers/Header";
import { useContext, useEffect, useState } from "react";
import LoadingPage from "./loading/page";
import { Store } from "../context/Store";

const PreloaderProvider = ({ children }) => {

  // const { loader, setloader }=useContext(Store)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default PreloaderProvider;
