import logoImage from "../assets/kominfo.png";
import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row flex-wrap gap-4 p-6 mt-8 xl:py-16 xl:px-32 md:py-16 md:px-16 md:justify-around bg-slate-900 h-auto md:h-72 text-white">
        <div className="grow xl:grow-0 m-0">
          <Link to="/">
            <img src={logoImage} alt="Diskominfo Klaten" className="w-56 mb-5 mx-auto" />
          </Link>
        </div>
        <div className="grow flex flex-col md:items-center">
          <h2 className="pb-4 font-semibold text-xl">Ikuti Kami</h2>
          <div className="flex gap-4">
            <a href="https://twitter.com/kominfo_klt" target="blank">
              <FontAwesomeIcon icon={faXTwitter} className="fa-2xl hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/kominfo.klaten/?hl=id" target="blank">
              <FontAwesomeIcon icon={faInstagram} className="fa-2xl hover:text-blue-500" />
            </a>
            <a href="https://diskominfo.klaten.go.id/rss-feeds" target="blank">
              <FontAwesomeIcon icon={faRss} className="fa-2xl hover:text-blue-500" />
            </a>
          </div>
        </div>
        <div>
          <div className="md:flex-1">
            <h2 className="pb-4 font-semibold text-xl">About</h2>
            <p className="text-md text-slate-300">
              <MdPlace className="inline me-2 mb-1 text-blue-500" />
              Jl. Pemuda No. 294 Klaten 57424
            </p>
            <p className="text-md text-slate-300">
              <MdPhone className="inline me-2 mb-1 text-blue-500" />
              0272-321046
            </p>
            <p className="text-md text-slate-300">
              <MdMail className="inline me-2 mb-1 text-blue-500" />
              diskominfo@klaten.go.id
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 p-4">
        <p className="text-slate-50/75 text-xs text-center md:text-left">Dinas Komunikasi dan Informatika Klaten. Hak Cipta dilindungi Undang-undang.</p>
      </div>
    </div>
  );
};

export default Footer;
