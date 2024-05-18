import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { StoreProviders } from './Store';
import PreloaderProvider from "./PreloaderProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import MovingBar from "@/components/headers/moving-bar/MovingBar";
import { Web3Modal } from "@/components/context/Web3Modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoadingPage from "./loading/page";
export const revalidate = 10;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Force Finance - Decentralized Finance (Defi) Web 3.0 Solutions | Explore Now ",
  description:
    "Discover Force Finance, your premier destination for decentralized finance (DeFi) solutions on Web 3.0. Explore our innovative DEX platform offering a range of financial services powered by blockchain technology. Join us in revolutionizing finance today!",
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <head></head>
      <StoreProviders>
        <Web3Modal>
          <StoreProvider>
            <body className={inter.className}>
              {/* {true ? 'loading' : */}
              <>
              <MovingBar />
              <PreloaderProvider>
                {children}
                <GoogleAnalytics gaId="G-C38R7K64GZ" />
                <SpeedInsights />
              </PreloaderProvider>
              </>
               {/* } */}
              <ToastContainer />
            </body>
          </StoreProvider>
        </Web3Modal>
      </StoreProviders>
    </html>
  );
}
