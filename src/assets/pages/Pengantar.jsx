import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import { Sidebar } from "../../component/Sidebar";

export const Pengantar = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap p-6 xl:py-6 xl:px-32 md:py-4 md:px-16">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Kata Pengantar</h1>
          <p>
            <span className="font-semibold">Assalamualaikum, Wr. Wb </span>
            <br></br>
            <br></br>
            Puji dan syukur kita panjatkan kehadirat Tuhan Yang Maha Esa karena atas rahmat, hidayah dan karunia-NYA, kita telah dapat mengembangkan, membangun dan mengelola website Dinas Komunikasi dan Informatika Kabupaten Klaten.
            <br></br>
            <br></br>
            Website dengan nama https://diskominfo.klaten.go.id/ merupakan salah satu bentuk pendukung berjalananya pelaksanaan Undang-Undang Nomor 14 Tahun 2008 Tentang Keterbukaan Informasi Publik. Dinas Komunikasi dan Informatika
            Kabupaten Klaten sebagai badan publik berkewajiban memberikan layanan informasi publik secara terbuka dan efisien, sehingga tercipta transparansi, partisipasi dan akuntabilitas kepada publik.
            <br></br>
            <br></br>
            Berdasarkan amanat Undang-Undang Nomor 14 Tahun 2008 setiap masyarakat berhak memperoleh informasi, serta berhak untuk mencari, memperoleh, memiliki, menyimpan, mengolah dan menyampaikan informasi dengan menggunakan segala jenis
            saluran yang tersedia. Dengan adanya website https://diskominfo.klaten.go.id/ diharapkan masyarakat dapat mengakses berbagai macam informasi publik dengan mudah, murah, cepat, efektif dan efisien.
            <br></br>
            <br></br>
            Selain itu, dengan adanya website https://diskominfo.klaten.go.id/ akan sangat membantu bagi lancarnya informasi dan layanan informasi publik kepada masyarakat, terutama informasi yang berkaitan dengan kegiatan Dinas Komunikasi
            dan Informatika Kabupaten Klaten secara terbuka dan efisien kepada publik, sehingga tercipta transparansi dan akuntabilitas.
            <br></br>
            <br></br>
            Akhirnya kami mengucapkan terima kasih kepada semua pihak yang telah membantu mengelola dan mengembangkan website https://diskominfo.klaten.go.id/ ini, semoga usaha yang kita lakukan dapat berguna dan bermanfaat bagi pembangunan
            secara umum, terutama sekali dalam mencapai visi dan misi Dinas Komunikasi dan Informatika.
            <br></br>
            <br></br>
            <span className="font-semibold">Wassalamualaikum Wr Wb.</span>
            <br></br>
            <br></br>
            Kepala Dinas Komunikasi dan Informatika Kabupaten Klaten
            <br></br>
            <br></br>
            ttd
            <br></br>
            <br></br>
            Drs. AMIN MUSTOFA, M.Si
          </p>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};
