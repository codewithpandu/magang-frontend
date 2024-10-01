import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const ProfilDinas = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Profil Kepala Dinas</h1>
          <div className="mb-4">
            <h2 className="text-xl font font-semibold mb-2">Profil</h2>
            <p>Nama: Drs. AMIN MUSTOFA,M.Si</p>
            <p>Tempat/Tanggal Lahir : Sragen / 15 November 1966</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font font-semibold mb-2">Riwayat Pendidikan</h2>
            <ul className="list-disc list-inside ms-3">
              <li>Manajemen Administrasi Publik Universitas Slamet Riyadi ( 2010 )</li>
              <li>Stastika MIPA Universitas Gahajah Mada ( 1992 )</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font font-semibold mb-2">Riwayat Jabatan</h2>
            <ul className="list-disc list-inside ms-3">
              <li>1994 - 1997,Sarjana Pendamping Puran waktu ( SP2W ) Kontrak kerja dengan BAPPENAS</li>
              <li>1997 - 2002,Staf Kantor Pemberdayaan Masyarakat Desa Kab. Banjarnegara </li>
              <li>2002-2006,staf Bagian umum setda klaten </li>
              <li>2006- 2008,Kasubag TU Bagian Umum Setda Klaten </li>
              <li>2008- 2012,Kasubag TU Bagian Keuangan Bagian Umum Setda Klaten </li>
              <li>2012 - 2018,Kepala Bagian Umum Setda Klaten </li>
              <li>2018, Kepala Bagian Kesra Setda Klaten </li>
              <li>2018-Sekarang, Kepala Dinas Komunikasi dan Informatika Klaten </li>
            </ul>
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilDinas;
