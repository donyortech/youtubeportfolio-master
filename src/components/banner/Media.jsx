import React from "react"
import { FaFacebookF, FaReact, FaTelegram, FaVuejs, FaInstagram } from "react-icons/fa"
import { SiTailwindcss, SiFigma,} from "react-icons/si"
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/DonyorRakhmatullaev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://t.me/donyor_rakhmatullaev"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.instagram.com/donyor_rakhmatullaev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaVuejs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media
