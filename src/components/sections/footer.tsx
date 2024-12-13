import { HoCall, HoFacebook, HoInstagram, HoMapPoint, HoMessage, HoTiktok, HoWhatsapp } from "@/lib/icon"

const Footer = () => {
  return (
    <footer className="footer xl:px-[85px] lg:px-15 px-7.5 bg-background ">
      <div className="flex md:justify-between justify-center items-center flex-wrap gap-10 pt-[88px] pb-20">
        <div>
          <h2 className=" xl:text-[80px] lg:text-6xl text-[50px] font-salsa text-center md:text-left">
            <span className="block">Meem</span>
            <span className="block">Home</span>
          </h2>
          <div className="flex gap-2 mt-[18px]">
            <a href="#" className="hover:opacity-80 transition-all duration-500">
              <HoWhatsapp />
            </a>
            <a href="#" className="hover:opacity-80 transition-all duration-500">
              <HoTiktok />
            </a>
            <a href="#" className="hover:opacity-80 transition-all duration-500">
              <HoFacebook />
            </a>
            <a href="#" className="hover:opacity-80 transition-all duration-500">
              <HoInstagram />
            </a>
          </div>
        </div>
        <div className="md:w-auto w-full">
          <h6 className=" font-semibold lg:text-4xl text-3xl underline text-center">Quick Links</h6>
          <ul className="flex flex-col items-center gap-4 mt-7">
            <li><a href="#" className=" lg:text-[32px] sm:text-[26px] text-xl hover:opacity-80 transition-all duration-500">Home</a></li>
            <li><a href="#" className=" lg:text-[32px] sm:text-[26px] text-xl hover:opacity-80 transition-all duration-500">About</a></li>
            <li><a href="#" className=" lg:text-[32px] sm:text-[26px] text-xl hover:opacity-80 transition-all duration-500">Contact</a></li>
            <li><a href="#" className=" lg:text-[32px] sm:text-[26px] text-xl hover:opacity-80 transition-all duration-500">Terms & Conditins</a></li>
            <li><a href="#" className=" lg:text-[32px] sm:text-[26px] text-xl hover:opacity-80 transition-all duration-500">Privacy policy</a></li>
          </ul>
        </div>
        <div className="xl:w-auto w-full">
          <h6 className=" font-semibold lg:text-4xl text-3xl underline text-center md:text-left">Have a questions ?</h6>
          <ul className="flex flex-col items-center md:items-start gap-6 mt-7">
            <li className="flex items-center gap-4 ">
              <HoMapPoint />
              <p className="lg:text-[32px] sm:text-[26px] text-xl">Mejdlaya - tripoli-lebanon</p>
            </li>
            <li className="flex items-center gap-4 ">
              <HoCall />
              <a href="tel:96176591765" className="lg:text-[32px] sm:text-[26px] text-xl">+961 76 591 765</a>
            </li>
            <li className="flex items-center gap-4 ">
              <HoMessage />
              <a href="mailto:Info@email" className="lg:text-[32px] sm:text-[26px] text-xl">Info@email</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between gap-5 overflow-hidden footer-line">
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
        <span className="inline-block w-[95px] h-[9px]"></span>
      </div>
      <div className="text-center  pt-11 pb-[57px]">
        <p className="lg:text-2xl text-xl">This site is protected by recaptcha and the the google privacy policy and terms service apply </p>
        <p className="lg:text-2xl text-xl font-semibold mt-6 flex gap-4 justify-center"><span>Meme Home</span> <span>2024 Copyright</span></p>
      </div>
    </footer>
  )
}

export default Footer