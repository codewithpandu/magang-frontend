import { Home } from "../assets/pages/Home";
import { Peraturan } from "../assets/pages/Peraturan";
import { Profil } from "../assets/pages/Profil";
import { Ppid } from "../assets/pages/Ppid";
import { Layanan } from "../assets/pages/Layanan";
import { Kontak } from "../assets/pages/Kontak";
import { Galery } from "../assets/pages/Galery";
import { Pengantar } from "../assets/pages/Pengantar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Selayang } from "../assets/pages/Selayang";
import Visi from "../assets/pages/Visi";
import Organisasi from "../assets/pages/Organisasi";
import ProfilDinas from "../assets/pages/ProfilDinas";
import ProfilPejabat from "../assets/pages/ProfilPejabat";
import KepalaDinas from "../assets/pages/KepalaDinas";
import Sekretariat from "../assets/pages/Sekretariat";
import BidangKomunikasi from "../assets/pages/BidangKomunikasi";
import BidangInformatika from "../assets/pages/BidangInformatika";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/peraturan" element={<Peraturan />} />
        <Route path="/ppid" element={<Ppid />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/pengantar" element={<Pengantar />} />
        <Route path="/selayang-pandang" element={<Selayang />} />
        <Route path="/visi-misi" element={<Visi />} />
        <Route path="/struktur-organisasi" element={<Organisasi />} />
        <Route path="/profil-kepala-dinas" element={<ProfilDinas />} />
        <Route path="/profil-pejabat-struktural" element={<ProfilPejabat />} />
        <Route path="/kepala-dinas" element={<KepalaDinas />} />
        <Route path="/sekretariat" element={<Sekretariat />} />
        <Route path="/bidang-komunikasi" element={<BidangKomunikasi />} />
        <Route path="/bidang-informatika" element={<BidangInformatika />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
