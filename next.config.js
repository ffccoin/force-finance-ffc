module.exports = {
  // async redirects(){
  //   return [

  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "(s2.coinmarketcap.com)",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // ... other configurations
};
