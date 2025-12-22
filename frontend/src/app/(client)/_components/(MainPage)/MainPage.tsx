"use client";

import { MainPageSections } from "./MainPageSections";

export const MainPage = () => {
  return (
    <>
      <div className="w-screen ">
        <img src="/BG.png" alt="" className="w-screen" />
      </div>
      <MainPageSections />
    </>
  );
};
