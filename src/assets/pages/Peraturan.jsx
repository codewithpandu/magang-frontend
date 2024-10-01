import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

export const Peraturan = () => {
  function Cards(props) {
    return (
      <a href={props.url} className="bg-blue-500 px-4 py-2 rounded-2xl text-slate-50 inline-block w-full mb-4 hover:text-blue-950 hover:underline underline-offset-4">
        {props.content}
      </a>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-between md:flex-nowrap mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="md:basis-3/5">
          <h1 className="font-semibold text-2xl pb-4">Peraturan</h1>
          <div>
            <Cards content="1. PERATURAN DAERAH KABUPATEN KLATEN NOMOR 18 TAHUN 2018 TENTANG PENYELENGGARAAN e-GOVERNMENT" url="https://drive.google.com/file/d/1nZ4S7GSKj7kyFXfSrJkxYCRNAPBWHEn7/view" />
            <Cards content="2. PERATURAN BUPATI KLATEN NOMOR 49 TAHUN 2018 TENTANG INTEGRASI SATU DATA UNTUK PEMBANGUNAN DAERAH DI KABUPATEN KLATEN" url="https://drive.google.com/file/d/15OGp6Ab1nX3r4qRKoVLiRRcdEpSjLtAk/view" />
            <Cards
              content="3. PERATURAN BUPATI KLATEN NOMOR 50 TAHUN 2018 TENTANG REGISTRAR NAMA DOMAIN PERANGKAT DAERAH DAN DESA DI LINGKUNGAN PEMERINTAH KABUPATEN KLATEN"
              url="https://drive.google.com/file/d/15OGp6Ab1nX3r4qRKoVLiRRcdEpSjLtAk/view"
            />
            <Cards content="4. PERATURAN BUPATI KLATEN NOMOR 3 TAHUN 2020 TENTANG PEMANFAATAN PERANGKAT LUNAK DI LINGKUNGAN PEMERINTAH KABUPATEN KLATEN" url="https://drive.google.com/file/d/15OGp6Ab1nX3r4qRKoVLiRRcdEpSjLtAk/view" />
            <Cards content="5. PERATURAN BUPATI KLATEN NOMOR 4 TAHUN 2020 TENTANG PEDOMAN PENGELOLAAN MEDIA SOSIAL DI LINGKUNGAN PEMERINTAH KABUPATEN KLATEN" url="https://drive.google.com/file/d/15OGp6Ab1nX3r4qRKoVLiRRcdEpSjLtAk/view" />
            <Cards content="6. SOP PENDAFTARAN DAN PENERBITAN SISTEM ELETRONIK" url="https://cloud.klaten.go.id/drive/s/DZlPXr07k9I6hRcwJ0t2qN1uzvF9aK" />
            <Cards content="7. SOP PENCABUTAN SERTIFIKAT ELEKTRONIK" url="https://cloud.klaten.go.id/drive/s/wANMEI3HRfynIw0swFf14YXCY0ziFh" />
            <Cards content="8. SOP PEMBARUAN SERTIFIKAT ELEKTRONIK" url="https://cloud.klaten.go.id/drive/s/bxHrnfRMERuMMHJY6J8a8DnwRU8t2v" />
            <Cards content="9. SOP PERMOHONAN LAYANAN SISTEM SERTIFIKAT ELEKTRONIK" url="https://cloud.klaten.go.id/drive/s/fe36CW9H26FuhiFATnvcx9FpgOzrTZ" />
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};
