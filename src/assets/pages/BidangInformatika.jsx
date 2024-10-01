import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const BidangInformatika = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Bidang Informatika dan Persandian</h1>
          <p>
            TUGAS POKOK DAN FUNGSI
            <br></br>
            (1) Bidang Informatika dipimpin oleh Kepala Bidang yang mempunyai tugas melaksanakan sebagian tugas dinas di bidang Informatika dan Persandian. <br></br>
            (2) Rincian tugas sebagaimana dimaksud pada ayat (1) adalah sebagai berikut:
            <br></br>
            <ul className="list-decimal list-inside mt-2 ms-4">
              <li>penyusunan program kerja bidang informatika dan persandian;</li>
              <li>perumusan kebijakan teknis di bidang informatika dan persandian;</li>
              <li>pelaksanaan kebijakan teknis di bidang informatika dan persandian;</li>
              <li>pelaksanaan koordinasi di bidang informatika dan persandian;</li>
              <li>pelaksanaan monitoring, evaluasi, dan pelaporan di bidang informatika dan persandian;</li>
              <li>
                pengoordinasian program pengelolaan aplikasi informatika, meliputi kegiatan :
                <ul className="list-disc list-inside ms-6">
                  <li>pengelolaan nama domain yang telah ditetapkan oleh Pemerintah Pusat dan sub domain di lingkup Pemerintah Daerah Kabupaten; dan</li>
                  <li>pengelolaan e-government di lingkup Pemerintah Daerah.</li>
                </ul>
              </li>
              <li>pengoordinasian program penyelenggaraan persandian untuk pengamanan informasi pada kegiatan penyelenggaraan persandian untuk pengamanan informasi Pemerintah Daerah Kabupaten; dan</li>
              <li>pelaksanaan fungsi kedinasan lain yang diberikan oleh Pimpinan</li>
            </ul>
          </p>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default BidangInformatika;
