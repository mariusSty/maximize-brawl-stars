import React from "react";
import gemme from "./images/gemme.png";

export const Header = () => {
  return (
    <div className="flex items-center w-full h-20 bg-slate-800 shadow-xl px-7">
      <img className="h-10 w-10 mx-5" src={gemme} alt="Logo" />;
      <h1 className="text-3xl text-slate-100">Maximize Brawl Stars</h1>
    </div>
  );
};
