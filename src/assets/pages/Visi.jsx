import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const Visi = () => {
  function Card() {
    return (
      <div className="bg-blue-600 h-auto text-slate-100 p-8 rounded-2xl">
        <div className="text-center my-6">
          <p className="text-md pb-2">VISI Kementerian Komunikasi dan Informatika</p>
          <h1 className="text-3xl font-bold tracking-wide">
            TERWUJUDNYA KABUPATEN KLATEN YANG MAJU, <br></br> MANDIRI DAN SEJAHTERA
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="w-full">
          <h1 className="font-semibold text-2xl pb-4">Visi Misi</h1>
          <Card />
          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-6">Misi Diskominfo Klaten</h2>
            <ul className="list-decimal list-inside text-lg">
              <li className="pb-4">Mewujudkan tatanan Kehidupan Masyarakat yang Berakhlak dan Berkepribadian;</li>
              <li className="pb-4">Mewujudkan Tata Kelola Pemerintahan yang baik, profesional, jujur, bersih, transparan, bertanggungjawab, dan anti korupsi;</li>
              <li className="pb-4">Meningkatkan kemandirian ekonomi daerah berbasis sektor unggulan daerah berdasarkan ekonomi kerakyatan;</li>
              <li className="pb-4">Mewujudkan pemerataan sarana prasarana wilayah yang berkualitas sesuai rencana tata ruang wilayah;</li>
              <li className="pb-4">Mewujudkan kualitas sumber daya manusia yang cerdas, sehat, berbudaya, dan responsif gender;</li>
              <li className="pb-4">Mewujudkan kualitas pengelolaan lingkungan hidup yang berkelanjutan.</li>
            </ul>
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Visi;
