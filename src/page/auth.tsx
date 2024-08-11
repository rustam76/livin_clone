// import React from 'react'
import backgraundLogo from "@/assets/backgraund-logo.svg";
import Chevron from "@/assets/Chevron";
import CsIcon from "@/assets/CsIcon";
import QrisIcon from "@/assets/QrisIcon";
import QuickPickIcon from "@/assets/QuickPickIcon";
import SetorTarikIcon from "@/assets/SetorTarikIcon";
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import ModalLogin from "./modalLogin";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginButton = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="mx-auto justify-center flex items-center h-svh px-4">
      <div>
        <div className="relative mb-10">
          <div className="flex items-center justify-between mb-4">
            <p className="text-center flex-grow">Aktifkan intip saldo</p>
            <span>
              <CsIcon />
            </span>
          </div>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 animate-bounce">
            <Chevron />
          </span>
        </div>

        <img src={backgraundLogo} alt="ini logo bacground" />
        <button
          className="bg-indigo-600 hover:bg-indigo-500 w-full rounded-full text-white py-3"
         
          onClick={loginButton}
        >
          Login
        </button>
        <div className="flex justify-between mt-4 mb-5 gap-3">
          <div className="text-center">
            <button className="bg-[#E47D1E] hover:bg-[#e4491e] rounded-full w-14 h-14  flex justify-center items-center">
              <div className="bg-slate-50 rounded-full w-5 h-5 flex justify-center items-center">
                <p className="bg-orange-500 w-3 h-3"></p>
              </div>
            </button>
            <p className="text-[12px]">Emoney</p>
          </div>

          <div className="text-center">
            <button className="bg-[#F3DE23] hover:bg-[#23f326db] rounded-full w-14 h-14  flex justify-center items-center">
              <QuickPickIcon />
            </button>
            <p className="text-[12px]">Qucik Pick</p>
          </div>

          <div className="text-center">
            <button className="bg-[#47A7FF] hover:bg-[#3fa2fe] rounded-full w-14 h-14  flex justify-center items-center">
              <QrisIcon />
            </button>
            <p className="text-[12px]">Qr Bayar</p>
          </div>

          <div className="text-center">
            <button className="bg-[#007AF5] hover:bg-[#3fa2fe] rounded-full w-14 h-14  flex justify-center items-center">
              <QrisIcon />
            </button>
            <p className="text-[12px]">
              QR Terima <br /> Trasfer
            </p>
          </div>

          <div className="text-center">
            <button className="bg-blue-700 hover:bg-[#3fa2fe] rounded-full w-14 h-14 flex justify-center items-center">
              <SetorTarikIcon />
            </button>
            <p className="text-[12px]">Setor tarik</p>
          </div>
        </div>

        <div className="px-2 shadow-lg  rounded-t-3xl sticky bottom-0 h-[100px] flex justify-center items-center border">
          <div className="text-center">
            <div className="border border-t-4 w-20 rounded-full m-auto"></div>
            <h1 className="text-sm font-bold mt-2 text-[#47A7FF] ">
              Special untuk anda yang special!
            </h1>
            <p className="text-[#6A6A6A] text-[12px] font-semibold">
              Lansung Swipe up, jangan samapi lewat
            </p>
          </div>
        </div>
      </div>

      {isLogin && <ModalLogin onClick={()=>setIsLogin(!isLogin)} />}
    </div>
  );
};

export default Authentication;
