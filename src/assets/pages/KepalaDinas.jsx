import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const KepalaDinas = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Kepala Dinas</h1>
          <p className="pb-4">Kepala Dinas mempunyai tugas memimpin penyelenggaraan pemerintahan daerah di bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik</p>
          <p>
            Dalam melaksanakan tugas, Kepala Dinas mempunyai fungsi sebagai berikut:
            <br></br>
            <ul className="list-decimal list-inside ms-2 mt-2">
              <li className="mb-4">Perumusan kebijakan teknis di bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
              <li className="mb-4">Pelaksanaan kebijakan teknis di bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
              <li className="mb-4">Pelaksanaan koordinasi di bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
              <li className="mb-4">Pelaksanaan evaluasi dan pelaporan di Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
              <li className="mb-4">Pelaksanaan administrasi Dinas; dan</li>
              <li className="mb-4">Pelaksanaan fungsi kedinasan lain yang diberikan oleh Bupati yang berkaitan dengan tugasnya.</li>
            </ul>
          </p>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default KepalaDinas;
