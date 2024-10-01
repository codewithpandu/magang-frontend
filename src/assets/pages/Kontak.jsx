import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Iframe from "react-iframe";
import { MdPhone, MdMail } from "react-icons/md";

export const Kontak = () => {
  function Card() {
    return (
      <div>
        <div className="mx-auto flex flex-wrap justify-center rounded-3xl overflow-hidden">
          <div>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.726564845907!2d110.59027477420534!3d-7.712461376403027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a45e286ca8aa3%3A0xe32e0eb5150bbe0c!2sKOMINFO%20KLATEN!5e0!3m2!1sid!2sid!4v1727325936638!5m2!1sid!2sid"
              style="border:0;"
              allowfullscreen=""
              className="w-screen h-[28rem] md:w-[40rem] md:h-[30rem]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 w-full p-8 md:p-16 text-white grow md:w-80">
            <h2 className="text-xl">Dinas Komunikasi dan Informasi Klaten</h2>
            <p className="my-4">Jl. Pemuda No. 294 Klaten 57424</p>
            <a href="https://maps.app.goo.gl/7ofJGHEuJHayWSEv9" className="btn btns-sm btn-accent text-slate-900">
              Petunjuk Arah
            </a>
            <div className="mt-8">
              <div className="flex flex-col gap-4">
                <p className="text-md text-slate-300">
                  <MdPhone className="inline me-2 mb-1 text-blue-300" />
                  0272-321046
                </p>
                <p className="text-md text-slate-300">
                  <MdMail className="inline me-2 mb-1 text-blue-300" />
                  diskominfo@klaten.go.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="mb-12 p-6 xl:py-6 xl:px-32 md:px-16 md:mb-0">
        <div className="w-full">
          <h1 className="font-semibold text-2xl pb-4">Hubungi Kami</h1>
          <div>
            <Card />
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <Footer />
    </div>
  );
};
