import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const BidangKomunikasi = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Bidang Komunikasi dan Statistik</h1>
          <p>
            Bidang Komunikasi dan Statistik dipimpin oleh Kepala Bidang yang mempunyai tugas melaksanakan sebagian tugas dinas di bidang komunikasi dan statistik meliputi telekomunikasi, komunikasi dan desiminasi informasi serta statistik.
          </p>
          <br></br>
          <p>Rincian tugas Bidang Komunikasi dan Statistik adalah sebagai berikut:</p>
          <br></br>
          <ul className="list-decimal list-inside ms-2">
            <li>penyusunan program kerja bidang komunikasi dan statistik;</li>
            <li>perumusan kebijakan teknis di bidang komunikasi dan statistik;</li>
            <li>pelaksanaan kebijakan teknis di bidang komunikasi dan statistik;</li>
            <li>pelaksanaan koordinasi di bidang komunikasi dan statistik;</li>
            <li>pelaksanaan monitoring, evaluasi, dan pelaporan di bidang komunikasi dan statistik; </li>
            <li>pengoordinasian program pengelolaan informasi dan komunikasi publik pada kegiatan pengelolaan informasi dan komunikasi publik Pemerintah Daerah Kabupaten;</li>
            <li>pengoordinasian program penyelenggaraan statistik sektoral pada kegiatan penyelenggaraan statistik sektoral di lingkup daerah Kabupaten;</li>
            <li>pengoordinasian pengendalian dan pengawasan penyelenggaraan telekomunikasi;</li>
            <li>pengoordinasian penyelenggaraan Satu Data Indonesia tingkat kabupaten; dan</li>
            <li>pelaksanaan fungsi kedinasan lain yang diberikan oleh Pimpinan.</li>
          </ul>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default BidangKomunikasi;
