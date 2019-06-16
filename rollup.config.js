import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";

const env = process.env.NODE_ENV;

const config = {
  output: {
    format: "umd",
    name: "blacktoolbox-prototype-languages",
    exports: "named"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    resolve({
      mainFields: ['module', 'jsnext', 'main'],
    }),
    babel({
      exclude: "/node_modules/*"
    }),
    commonjs({
      include: "/node_modules/*"
    })
  ]
};

if ("production" == env) {
  config.plugins.push(uglify());
};

export default config;
