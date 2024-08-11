// import React from 'react'
import ojk from "@/assets/ojk.svg"
import backgraundLogo from "@/assets/backgraund-logo.svg";
const LazzyLoad = () => {
  return (
      <div className="mx-auto justify-between flex flex-col items-center h-svh px-4 bg-indigo-600">
          <div></div>
          <div>
          <img src={backgraundLogo} alt="ini logo bacground" />
          </div>
          <div className='flex flex-col justify-center items-center mb-3 text-center text-white text-sm'>
              <img src={ojk} className='w-32' alt="ini logo bacground" />
              <p>
                  
              PT Bank Mandoro persoro Tbk terdaftar dan di awasi oleh ajk oleh karena itu cobalah bekerja keras untuk mendapatkan uang bukan meminta minta
              </p>
          </div>
    </div>
  )
}

export default LazzyLoad
