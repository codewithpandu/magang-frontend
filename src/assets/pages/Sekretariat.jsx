import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const Sekretariat = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Sekretariat</h1>
          <p>Sekretariat dipimpin oleh Sekretaris yang berada di bawah dan bertanggung jawab kepada Kepala Dinas yang mempunyai tugas memberikan pelayanan administratif di lingkungan Dinas.</p>
          <p>
            Dalam melaksanakan tugas, Sekretariat menyelenggarakan fungsi sebagai berikut:<br></br>
            <ul className="list-decimal list-inside ms-4">
              <li>pengoordinasian dan penyusunan program dan anggaran di lingkungan Dinas;</li>
              <li>pengoordinasian pelaksanaan program dan kegiatan Dinas;</li>
              <li>
                pengoordinasian program penunjang urusan pemerintahan daerah meliputi kegiatan:
                <ul className="list-disc list-inside ms-4 mt-2">
                  <li>perencanaan, penganggaran, dan evaluasi kinerja Dinas;</li>
                  <li>administrasi keuangan Dinas;</li>
                  <li>administrasi barang milik daerah pada Dinas;</li>
                  <li>administrasi pendapatan daerah kewenangan Dinas;</li>
                  <li>administrasi kepegawaian Dinas;</li>
                  <li>administrasi umum Dinas;</li>
                  <li>pengadaan barang milik daerah penunjang urusan Pemerintah Daerah;</li>
                  <li>penyediaan jasa penunjang urusan pemerintahan Daerah; dan</li>
                  <li>pemeliharaan barang milik daerah penunjang urusan pemerintahan Daerah.</li>
                </ul>
              </li>
              <li>pengoordinasian pelaksanaan hubungan masyarakat dan keprotokolan di lingkungan Dinas; dan</li>
              <li>pelaksanaan fungsi kedinasan lain yang diberikan Pimpinan</li>
            </ul>
          </p>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Sekretariat;
