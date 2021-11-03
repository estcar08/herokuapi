module.exports = {
  apps: [
    {
      name: "herokuapi",
      script: "./server.js",
      instances: 2,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
