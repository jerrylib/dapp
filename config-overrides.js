const path = require("path");
const moment = require("moment");
const { env } = require("./configs/address.json");

const FileManagerPlugin = require("filemanager-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
const { NODE_ENV } = process.env;
module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": resolve("src"),
  };
  if (NODE_ENV === "production") {
    config.plugins.push(
      new FileManagerPlugin({
        events: {
          onEnd: {
            archive: [
              {
                source: "./build",
                destination:
                  "./zip/admin-" +
                  moment().format("yyyyMMDDHHmmss") +
                  "(" +
                  env +
                  ").zip",
              },
            ],
          },
        },
      })
    );
  }
  return config;
};
