import React from "react";
import css from "./Loader.module.css";
const Loader = () => {
  return <div className={`${css.loader} border border-red-800`}></div>;
};

export default Loader;
