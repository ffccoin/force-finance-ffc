import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPricesInUsd = createAsyncThunk(
  "coins/fetchPricesInUsd",
  async () => {
    const url = new URL("https://api.coingecko.com/api/v3/simple/price");
    const params = {
      ids: "bitcoin,ethereum,solana,cardano,terra-luna,polkadot",
      vs_currencies: "usd", // Specify the currency
    };
    url.search = new URLSearchParams(params).toString();

    // Fetch the data
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
);
// bitcoin,ethereum,solana,cardano,terra-luna,polkadot
export const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [
      "bitcoin",
      "ethereum",
      "solana",
      "cardano",
      "terra-luna",
      "polkadot",
    ],
    pricesInUsd: {},
  },
  reducers: {
    addCoin: (state, action) => {
      state.coins.push(action.payload);
    },
    removeCoin: (state, action) => {
      state.coins = state.coins.filter((coin) => coin !== action.payload);
    },
    updatePrices: (state, action) => {
      console.log("action", action);
      state.pricesInUsd = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPricesInUsd.fulfilled, (state, action) => {
      state.pricesInUsd = action.payload;
    });
  },
});

export const { addCoin, removeCoin, updatePrices } = coinsSlice.actions;

export default coinsSlice.reducer;
