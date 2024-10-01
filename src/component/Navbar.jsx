import NavDesktop from "./NavDesktop";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logoImage from "../assets/kominfo.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="p-3 flex justify-between md:justify-around items-center bg-slate-50 border-2">
      {/* Logo */}
      <Link to="/">
        <img src={logoImage} alt="Diskominfo Klaten" className="pt-2 w-40 md:m-0" />
      </Link>
      {/* Nav Desktop */}
      <NavDesktop />
      {/* Nav Mobile */}
      <nav className={`md:hidden ${isOpen ? "flex" : "hidden"} flex-col justify-around absolute top-[4.5rem] left-0 right-0 bottom-0 bg-slate-50 `}>
        <ul className="flex flex-col items-center gap-3 p-4 ">
          <li className="text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="text-center text-blue-500">
            <li onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Profil" : "Profil"}</li>
            <ul className={`flex-col gap-2 transition-transform bg-slate-100 p-3  w-96 text-center text-slate-950 ${menuOpen ? "flex" : "hidden"}`}>
              <Link to="/pengantar">
                <li>Kata Pengantar</li>
              </Link>
              <Link to="/selayang-pandang">
                <li>Selayang Pandang</li>
              </Link>
              <Link to="/visi-misi">
                <li>Visi Dan Misi</li>
              </Link>
              <Link to="/struktur-organisasi">
                <li>Struktur Organisasi</li>
              </Link>
              <Link to="/profil-kepala-dinas">
                <li>Profil Kepala Dinas</li>
              </Link>
              <Link to="/profil-pejabat-struktural">
                <li>Profil Pejabat Struktural</li>
              </Link>
              <Link to="/kepala-dinas">
                <li>Kepala Dinas</li>
              </Link>
              <Link to="/sekretariat">
                <li>Sekretariat</li>
              </Link>
              <Link to="/bidang-komunikasi">
                <li>Bidang Komunikasi dan Statistik</li>
              </Link>
              <Link to="/bidang-informatika">
                <li>Bidang Informatika dan Persandian</li>
              </Link>
            </ul>
          </li>
          <li className="text-blue-500">
            <Link to="/peraturan">Peraturan</Link>
          </li>
          <li className="text-blue-500">
            <Link to="/ppid">PPID</Link>
          </li>
          <li className="text-blue-500">
            <Link to="/layanan">Layanan</Link>
          </li>
          <li className="text-blue-500">
            <Link to="/galery">Galery</Link>
          </li>
          <li className="text-blue-500">
            <Link to="/kontak">Kontak</Link>
          </li>
        </ul>
        <div className="mx-auto text-center">
          <a href="#" className=" py-2 px-4 rounded-2xl text-slate-900 outline outline-2 inline-block w-80">
            Login
          </a>
        </div>
      </nav>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {/* Login */}
      <a href="#" className=" py-2 px-4 rounded-2xl text-slate-900 outline outline-2 hover:text-blue-500 hidden xl:block ">
        Login
      </a>
    </div>
  );
};

export default Navbar;
