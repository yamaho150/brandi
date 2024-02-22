// @ts-check

import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import rootWebpackConfig, { plugins as rootPlugins } from "../../webpack.config.js";

/** @type import('webpack').Configuration */
export default {
  ...rootWebpackConfig,
  entry: {
    main: fileURLToPath(new URL("dist/client-main.js", import.meta.url)),
  },
  output: {
    path: fileURLToPath(new URL("dist/umd", import.meta.url)),
    libraryTarget: "umd",
  },
  plugins: [...rootPlugins, new HtmlWebpackPlugin({ title: "Sample Monorepo App" })],
};
