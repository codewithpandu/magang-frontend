import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";

export const Selayang = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Selayang Pandang</h1>
          <p>
            Dinas Komunikasi dan Informatika Kabupaten Klaten adalah perangkat daerah di Lingkungan Pemerintah Kabupaten Klaten yang mempunyai tugas membantu Bupati melaksanakan urusan pemerintahan di bidang Komunikasi dan Informatika,
            bidang Persandian dan bidang Statistik. Dalam melaksanakan tugas tersebut, Dinas Komunikasi dan Informatika Kabupaten Klaten menyelenggarakan fungsi :<br></br>
            <br></br>
          </p>
          <ul className="list-decimal list-inside">
            <li className="pb-4">Perumusan kebijakan teknis bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
            <li className="pb-4">Pelaksanaan kebijakan teknis bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
            <li className="pb-4">Pelaksanaan koordinasi bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
            <li className="pb-4">Pelaksanaan monitoring evaluasi dan pelaporan bidang Komunikasi dan Informatika, bidang Persandian dan bidang Statistik;</li>
            <li className="pb-4">Pelaksanaan administrasi Dinas; dan</li>
            <li className="pb-4">Pelaksanaan fungsi kedinasan lain yang diberikan oleh Bupati terkait dengan tugas dan fungsinya</li>
          </ul>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Selayang;
