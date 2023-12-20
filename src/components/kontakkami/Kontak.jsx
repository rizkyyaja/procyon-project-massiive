import {useState} from 'react';
import { Textarea } from "react";

export const Kontak = () => {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    setVal(e.target.valeu);
  }
  
  
  // const [val setVal] = useState("");
    return (
      <>
       
       <div className="px-3 mx-auto md:flex lg:flex xl:flex 2xl:flex flex-row items-center justify-center">
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 bg-white text-black mt-40 items-center flex flex-col justify-center ">
            <h1 className="text-neutralBlack w-full font-bold text-4xl text-center ">Hubungi Kami!</h1>
            <div className="mt-10 w-full items-center flex flex-col justify-center ">
              <img src="src/assets/icons/iconjam.png" alt="" />
              <h3 className="text-2xl font-bold text-neutralPink1"> Jam Kerja</h3>
              <h5 className="mt-4">Senin-Jum'at</h5>
              <h5>08:00 - 17:00 WIB</h5>

              <img  className="mt-10 " src="src/assets/icons/phone.png" alt="" />
              <h3 className="text-2xl font-bold text-neutralPink1"> Kontak</h3>
            
              <h5 className="mt-4">+62-823-7666-4100</h5>
              <h5>+62-821-6472-3544</h5>
            </div>

            <div className="mt-10 w-full items-center flex flex-col justify-center ">
              <img  className="mt-10" src="src/assets/icons/gmail.png" alt="" />
              <h3 className="text-2xl font-bold text-neutralPink1"> Email</h3>
              <h5 className="mt-4">myparent2@gmail.com</h5>
            </div>
        </div>
       <div className="border rounded-lg  shadow-neutralPink1 p-10 pt-20 w-full md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/3 bg-white shadow-[4pt_8pt_0pt_2pt_gray] text-black text-2xl mt-52">
        <form action="">
            <label For="Nama">
              <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5">Nama</span>
              <input type="Nama" id="Nama" placeholder="Masukkan Nama Lengkap.." className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-neutralPink1 focus:border-l-neutralPink1"  />
            </label>
          </form>
          <form action="">
            <label For="Email">
              <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5 mt-5 ">Email</span>
              <input type="Email" id="Email" placeholder="Masukkan Email.." className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-neutralPink1 focus:border-l-neutralPink1 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"  />
              <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">Email tidak valid</p>
            </label>
          </form>
       
          <form action="">
            <label For="TulisPesan">
              <span className="block font-semibold mb-1 text-slate-700" >Tulis Pesan</span>
              <textarea  className="px-3 py-20 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-neutralPink1 focus:border-l-neutralPink1" placeholder='Tulis Pesan' value={val} onChange={handleChange} > </textarea>
            </label>
          </form>
       

          <button className="my-10 bg-neutralPink1 px-5 py-2 rounded-full text-white font-semibold font-inter block mx-auto  active:bg-neutralUngu focus:ring focus:ring-neutralUngu">Kirim Pesan</button>

       </div >

       </div>
      
      </>
    )
  }