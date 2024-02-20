import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Force Finance",
  description: "Generated by create next app",
};

async function getData() {
  // Define the URL and query parameters
  const url = new URL("https://api.coingecko.com/api/v3/simple/price");
  const params = {
    ids: "bitcoin,ethereum,solana,cardano,terra-luna,polkadot",
    vs_currencies: "usd", // Specify the currency
  };
  url.search = new URLSearchParams(params).toString();

  // Fetch the data
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;

  //--------------------------------------------------------------------------------
  // use node binance api
  // const Binance = require("node-binance-api");
  // const binance = new Binance().options({
  //   APIKEY: process.env.BINANCE_API_KEY,
  //   APISECRET: process.env.BINANCE_API_SECRET,
  // });

  // // use try catch too
  // const prices = await binance.prices();
  // return prices;
  //--------------------------------------------------------------------------------

  // const res = await fetch("https://api.binance.com/api/v3/ticker/price");
  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }
  // const data = await res.json();
  // const prices = data.reduce((acc, pair) => {
  //   // Bitcoin, Ethereum, Solana, Cardano, Terra, Polkadot
  //   if (
  //     pair.symbol === "BTCUSDT" ||
  //     pair.symbol === "ETHUSDT" ||
  //     pair.symbol === "SOLUSDT" ||
  //     pair.symbol === "ADAUSDT" ||
  //     pair.symbol === "LUNAUSDT" ||
  //     pair.symbol === "DOTUSDT"
  //   ) {
  //     // round off to 2 decimal places
  //     acc[pair.symbol] = Math.round(pair.price * 100) / 100;
  //   }
  //   return acc;
  // }, {});

  // return prices;
}

export default async function RootLayout({ children }) {
  const data = await getData();
  console.log(data);
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Header prices={data} />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
