module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "assets/[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};
