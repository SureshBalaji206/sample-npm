import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const rollupConfig = [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      commonjs(),
      peerDepsExternal(),
      nodeResolve(),
      terser(),
    ],
  },
];

export default rollupConfig;
