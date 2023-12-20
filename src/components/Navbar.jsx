import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center text-white bg-[#937DC2] p-4 lg:px-24 lg:py-6">
        <div className="flex items-center">
          <img src="src/assets/img/logo.png" alt="" />
          <h1 className="text-2xl font-bold ms-4">MyParent</h1>
        </div>

        <div className="max-lg:hidden flex gap-12">
          <Link to="/" className="text-xl hover:text-black">Beranda</Link>
          <Link to="/fitur" className="text-xl hover:text-black">Fitur</Link>
          <Link to="/tentang" className="text-xl hover:text-black">Tentang Kami</Link>
          <Link to="/kontakkami" className="text-xl hover:text-black">Kontak Kami</Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => {
              menuToggle === true ? setMenuToggle(false) : setMenuToggle(true);
            }}
            className="p-8 bg-[#7b62b1]"
          >
            toggle
          </button>
        </div>

        {menuToggle && (
          <div className="w-screen h-screen fixed left-0 top-0 bg-black z-1">
            <div className="flex justify-start p-8">
              <button
                onClick={() => {
                  menuToggle === true
                    ? setMenuToggle(false)
                    : setMenuToggle(true);
                }}
                className="px-4 py-2 bg-[#4b435e]"
              >
                x
              </button>
            </div>
            <div className="grid gap-12 p-8">
              <Link to="/" className="hover:underline underline-offset-">Beranda</Link>
              <Link to="/fitur" className="hover:underline underline-offset-">Fitur</Link>
              <Link to="/tentang" className="hover:underline underline-offset-">Tentang Kami</Link>
              <Link to="/kontakkami" className="hover:underline underline-offset-">Kontak Kami</Link>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};
