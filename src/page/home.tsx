import React from "react";
import bgtop from "@/assets/backgraund-top.svg";
import human from "@/assets/human.svg";
import QrisIcon from "@/assets/QrisIcon";
import kartu from "@/assets/kartu-atm.svg";
import shope from "@/assets/shope.svg";
import linkajax from "@/assets/linkaja.svg";
import dana from "@/assets/dana.svg";
import { convertCurrency } from "@/lib/currency";
import Panah from "@/assets/Panah";
import BayarIcon from "@/assets/BayarIcon";
import EwaletIcon from "@/assets/EwaletIcon";
import EmoneyIcon from "@/assets/EmoneyIcon";
import SetorTarikIcon from "@/assets/SetorTarikIcon";
import TapIcon from "@/assets/TapIcon";
import InvestasiIcon from "@/assets/InvestasiIcon";
import ValasIcon from "@/assets/ValasIcon";
// import { GoHome } from "react-icons/go";
import {
  GrAnnounce,
  GrHomeRounded,
  GrLogout,
  GrMailOption,
} from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { getGreeting } from "@/lib/hour";

const Home = () => {
  const [money, setMoney] = React.useState(() => {
    const savedMoney = localStorage.getItem("money");
    return savedMoney ? parseInt(savedMoney, 10) : 1000000;
  });
  const [isOpen, setIOpen] = React.useState(true);

  const [name, setName] = React.useState(() => {
    return localStorage.getItem("namelogin") || "";
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setMoney((prevMoney) => {
        if (prevMoney >= 1_000_000_000_000) {
          localStorage.setItem("money", "1000000"); // Reset ke 1 juta
          return 1000000;
        } else {
          const newMoney = prevMoney * 10;
          localStorage.setItem("money", newMoney.toString());
          return newMoney;
        }
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const hotReload = () => {
    window.location.reload();
  };

    

  return (
    <div>
      <div className="sticky top-0">
        <img src={bgtop} className="w-full" alt="backroud top" />
      </div>
      <div className="flex justify-center items-center bg-gradient-to-b from-white to-[#fff4] py-2">
        <div>
          {/* section hero */}
          <div className="">
            <h1 className="text-md font-semibold text-center">
              {getGreeting()}, {name}
            </h1>
            <div className="flex justify-between">
              <img src={human} className="w-32" />
              <div className="">
                <p className="text-sm font-medium">
                  Mau transfer, bayar, dan
                  <br />
                  top up lebih cepat?
                </p>
                <button className="w-full mt-4 bg-indigo-400 px-4 py-2 rounded-full text-white text-sm">
                  Atur Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section menu */}

      <div className=" bg-white grid-cols-5 grid gap-4 px-4 py-4 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#22DAAB] rounded-full w-14 h-14 flex justify-center items-center ">
            <Panah />
          </button>
          <p className="text-[12px]">Trasfer Rupiah</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <button className="bg-[#4DDFF8] rounded-full w-14 h-14 flex justify-center items-center">
            <BayarIcon />
          </button>
          <p className="text-[12px]">Bayar</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#9BBD45] rounded-full w-14 h-14 flex justify-center items-center">
            <EwaletIcon />
          </button>
          <p className="text-[12px]">Top Up</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#FA8311] rounded-full w-14 h-14 flex justify-center items-center">
            <EmoneyIcon />
          </button>
          <p className="text-[12px]">e-money</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#47A7FF] rounded-full w-14 h-14 flex justify-center items-center">
            <SetorTarikIcon />
          </button>
          <p className="text-[12px]">Setor tarik</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <button className="bg-[#279DEF] rounded-full w-14 h-14 flex justify-center items-center">
            <ValasIcon />
          </button>
          <p className="text-[12px]">Trasfer Valas</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#125FAD] rounded-full w-14 h-14 flex justify-center items-center ">
            <QrisIcon />
          </button>
          <p className="text-[12px]">Qr Terima trasver</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#13B5B3] rounded-full w-14 h-14 flex justify-center items-center">
            <QrisIcon />
          </button>
          <p className="text-[12px]">Qr Bayar</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#125FAD] rounded-full w-14 h-14 flex justify-center items-center">
            <TapIcon />
          </button>
          <p className="text-[12px]">Tap to Pay</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <button className="bg-[#13B5B3] rounded-full w-14 h-14 flex justify-center items-center">
            <InvestasiIcon />
          </button>
          <p className="text-[12px]">Investasi</p>
        </div>
      </div>

      {/* section tabungan */}
      <div className=" bg-[#F6F6F6] py-2 ">
        <div>
          <div className="flex justify-between px-4">
            <h1 className="text-md font-bold text-center">
              Tabungan & Deposit
            </h1>
            <div className="flex justify-center items-center gap-2">
              <div className="flex justify-center items-center gap-2">
                <button onClick={() => setIOpen(!isOpen)}>
                  {isOpen ? <FiEye /> : <FiEyeOff />}
                </button>
                Saldo
              </div>
              <div className="flex justify-center items-center gap-1">
                <button>
                  <GoPencil/>
                </button>
                edit
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="drop-shadow-lg bg-white h-[114px] w-full relative inset-x-4 px-5 py-4">
            <h1 className="text-md font-medium">Tabunga saldo ku</h1>
            <h2 className="text-md">03497324732764732</h2>
            {isOpen && (
              <h2 className="text-md font-semibold">
                {convertCurrency(money)}
              </h2>
            )}
          </div>
          <img src={kartu} className="mt-1" alt="" />
        </div>
      </div>

      {/* ewallet */}
      <div className=" bg-[#F6F6F6] py-2 px-4">
        <div className="mb-3">
          <div className="flex justify-between">
            <h1 className="text-md font-bold text-center">e-Wallet</h1>
          </div>
        </div>
        <div className="relative w-full">
          <div className="flex gap-4 overflow-x-auto">
            <div className="h-36 w-64 bg-white rounded-xl flex flex-col justify-center items-center">
              <img src={shope} alt="" />
              <button className="border-2 border-indigo-600 px-2  py-1 rounded-full text-[10px]">
                hubungkan
              </button>
            </div>
            <div className="h-36 w-64 bg-white rounded-xl flex flex-col justify-center items-center">
              <img src={linkajax} alt="" />
              <button className="border-2 border-indigo-600 px-2  py-1 rounded-full text-[10px]">
                hubungkan
              </button>
            </div>
            <div className="h-36 w-64 bg-white rounded-xl flex flex-col justify-center items-center">
              <img src={dana} alt="" />
              <button className="border-2 border-indigo-600 px-2  py-1 rounded-full text-[10px]">
                hubungkan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center sticky bottom-0 bg-white px-4 py-2">
        <div className="flex flex-col items-center" onClick={hotReload}>
          <GrHomeRounded />
          <span className="text-[10px]">Beranda</span>
        </div>
        <div className="flex flex-col items-center">
          <GrAnnounce />
          <span className="text-[10px]">Promo</span>
        </div>
        <div className="flex flex-col items-center">
          <GrMailOption />
          <span className="text-[10px]">Pesan</span>
        </div>
        <div className="flex flex-col items-center">
          <IoSettingsOutline />
          <span className="text-[10px]">Pengaturan</span>
        </div>
        <div className="flex flex-col items-center" onClick={logOut}>
          <GrLogout />
          <span className="text-[10px]">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
