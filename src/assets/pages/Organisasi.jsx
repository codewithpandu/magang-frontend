import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import OrganisasiImage from "../../assets/struktur_organisasi.jpg";

const Organisasi = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Struktur Organisasi</h1>
          <img className="mb-8" src={OrganisasiImage} alt="Struktur Organsasi" />
          <a href="" className="underline underline-offset-4 text-red-600">
            SUSUNAN ORGANISASI TUGAS DAN FUNGSI SERTA TATA KERJA DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN KLATEN
          </a>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Organisasi;
