import { Link } from "react-router-dom";

const style = "hover:text-blue-500 inline";
const styleSubmenu = "hover:text-blue-500";

const NavDesktop = () => {
  return (
    <nav>
      <ul className="hidden md:flex md:gap-8 md:p-4">
        <li className={`${style} relative group `}>
          <Link to="/">Home</Link>
          <div className="absolute w-12 h-1 mt-1 rounded-lg bg-blue-500 hidden group-hover:block"></div>
        </li>
        <li className="hover:text-blue-500 inline group ">
          Profil
          <div className="absolute w-12 h-1 mt-1 rounded-lg bg-blue-500 hidden group-hover:block"></div>
          <ul className="hidden absolute bg-slate-50 p-5 group-hover:flex flex-col gap-3 text-slate-700">
            <li className={styleSubmenu}>
              <Link to="/pengantar">Kata Pengantar</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/selayang-pandang">Selayang Pandang</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/visi-misi">Visi Misi</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/struktur-organisasi">Struktur Organisasi</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/profil-kepala-dinas">Profil Kepala Dinas</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/profil-pejabat-struktural">Profil Pejabat Struktural</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/kepala-dinas">Kepala Dinas</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/sekretariat">Sekretariat</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/bidang-komunikasi">Bidang Komunikasi dan Statistik</Link>
            </li>
            <li className={styleSubmenu}>
              <Link to="/bidang-informatika">Bidang Informatika dan Persandian</Link>
            </li>
          </ul>
        </li>
        <li className={`${style} group`}>
          <Link to="/peraturan">Peraturan</Link>
          <div className="absolute w-20 h-1 mt-1 rounded-lg bg-blue-500 hidden group-hover:block"></div>
        </li>
        <li className={`${style} group relative`}>
          <Link to="/ppid">PPID</Link>
          <div className="absolute w-9 h-1 mt-1 rounded-lg bg-blue-500 hidden group-hover:block"></div>
        </li>
        <li className={`${style} group relative`}>
          <Link to="/layanan">Layanan</Link>
          <div className="absolute w-[4.4rem] h-1 mt-1 rounded-lg bg-blue-500 hidden group-hover:block"></div>
        </li>

        <li className={`${style} group relative`}>
          <Link to="/kontak">Hubungi Kami</Link>
          <div className="absolute w-28 h-1 mt-1 rounded-lg bg-blue-500 hidden group-hover:block"></div>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
