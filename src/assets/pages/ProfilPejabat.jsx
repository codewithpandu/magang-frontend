import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const ProfilPejabat = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div>
          <h1 className="font-semibold text-2xl pb-4">Profil Pejabat Struktural</h1>
          <div className="overflow-y-auto">
            <table class="min-w-full table-auto border-collapse border border-slate-400 ">
              <caption class="caption-top">Table Profil Pejabat.</caption>
              <thead>
                <tr className="px-4">
                  <th class="border border-slate-300 px-4">No</th>
                  <th class="border border-slate-300 px-4">Nama</th>
                  <th class="border border-slate-300 px-4">Gol. Ruang</th>
                  <th class="border border-slate-300 px-4">Jabatan</th>
                  <th class="border border-slate-300 px-4">Eselon</th>
                  <th class="border border-slate-300 px-4">Pendikan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td class="border border-slate-300 px-4">1.</td>
                  <td class="border border-slate-300 px-4">Drs. AMIN MUSTOFA , M.Si</td>
                  <td class="border border-slate-300 px-4">IV/b</td>
                  <td class="border border-slate-300 px-4">Kepala Dinas Komunikasi dan Informatika</td>
                  <td class="border border-slate-300 px-4">II.b</td>
                  <td class="border border-slate-300 px-4">S.2 Magister Sains</td>
                </tr>
                <tr className="text-center">
                  <td class="border border-slate-300 px-4">2.</td>
                  <td class="border border-slate-300 px-4">ARIS PRAMANA, SE, MM</td>
                  <td class="border border-slate-300 px-4">IV/a</td>
                  <td class="border border-slate-300 px-4">Sekretaris Dinas Komunikasi dan Informatika</td>
                  <td class="border border-slate-300 px-4">III.a</td>
                  <td class="border border-slate-300 px-4">S.2 Magister Manajemen</td>
                </tr>
                <tr className="text-center">
                  <td class="border border-slate-300 px-4">3.</td>
                  <td class="border border-slate-300 px-4">NANIEK LISTYAWATI, SE, M.Acc</td>
                  <td class="border border-slate-300 px-4">III/c</td>
                  <td class="border border-slate-300 px-4">Kepala Sub Bagian Perencanaan dan Keuangan Dinas Komunikasi dan Informatika</td>
                  <td class="border border-slate-300 px-4">IV.a</td>
                  <td class="border border-slate-300 px-4">S.2 Magister Akuntansi</td>
                </tr>
                <tr className="text-center">
                  <td class="border border-slate-300 px-4">4.</td>
                  <td class="border border-slate-300 px-4">EDI SUTANTO, A.Md</td>
                  <td class="border border-slate-300 px-4">III/b</td>
                  <td class="border border-slate-300 px-4">Kepala Sub Bagian Umum dan Kepegawaian Dinas Komunikasi dan Informatika</td>
                  <td class="border border-slate-300 px-4">IV.a</td>
                  <td class="border border-slate-300 px-4">D.III Teknik</td>
                </tr>
                <tr className="text-center">
                  <td class="border border-slate-300 px-4">5.</td>
                  <td class="border border-slate-300 px-4">PINANDITA BIMA MAHENDRA, ST.</td>
                  <td class="border border-slate-300 px-4">III/d</td>
                  <td class="border border-slate-300 px-4">Kepala Bidang Komunikasi dan Statistik Dinas Komunikasi dan Informatika</td>
                  <td class="border border-slate-300 px-4">III.b</td>
                  <td class="border border-slate-300 px-4">S1. Sarjana Teknik</td>
                </tr>
                <tr className="text-center">
                  <td class="border border-slate-300 px-4">6.</td>
                  <td class="border border-slate-300 px-4">ANDI HERMANTO, S.Kom, M.Eng</td>
                  <td class="border border-slate-300 px-4">III/d</td>
                  <td class="border border-slate-300 px-4">Kepala Bidang Informatika dan Persandian Dinas Komunikasi dan Informatika</td>
                  <td class="border border-slate-300 px-4">III.b</td>
                  <td class="border border-slate-300 px-4">S2. Magister Teknik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilPejabat;
