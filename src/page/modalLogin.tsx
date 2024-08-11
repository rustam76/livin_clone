import React, { useState } from "react";
import logo from "@/assets/logo.png";

import { useNavigate } from "react-router-dom";


interface Porps{
    onClick (): void;
}

const ModalLogin = ({onClick}:Porps) => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const createLogin = () => {
      if (name) {
        localStorage.setItem("namelogin", name);
        navigate("/home");
        
    }
  };

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-10">
    
      <div className="p-4 rounded-lg max w-full h-svh">
        <div className="flex justify-end text-white cursor-pointer" onClick={onClick}>X</div>
        <div className="text-center mb-6">
          <img
            src={logo} 
            alt="Logo"
            className="mx-auto w-24 mb-20"
          />
        </div>
        <input
          type="text"
          placeholder="Masukkan Nama Kamu"
          className="w-full px-4 py-4 mb-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-4 rounded-full hover:bg-blue-600 transition"
          onClick={createLogin}
        >
          Login
        </button>
        <p className="text-center mt-4 text-blue-900 font-bold cursor-pointer">
          Lupa Password?
        </p>
      </div>
    </div>
  );
};

export default ModalLogin;
