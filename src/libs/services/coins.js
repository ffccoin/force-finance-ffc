// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const url = new URL("https://api.coingecko.com/api/v3/coins/markets");
const params = {
  ids: "bitcoin,ethereum,solana,cardano,terra-luna,polkadot",
  vs_currency: "usd", // Specify the currency
};
url.search = new URLSearchParams(params).toString();

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url.toString(),
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsQuery } = coinsApi;
