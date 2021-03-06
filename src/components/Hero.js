import React from "react";
import { Link } from "react-router-dom";

import hero from "../image/hero.png";
import back from "../image/back.svg";

const Hero = () => {
  return (
    <>
      <div className="pt-24 bg-local" style={{backgroundImage: `url(${back})`}}>
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center" >
          {/*Left Col*/}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full">
              Layanan ujian daring
            </p>
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Ujian daring jadi mudah, aman dan terpercaya
            </h1>
            <p className="leading-normal text-1xl mb-8">
              Ayoujian memudahkan ujian online untuk pendidikan, pekerjaaan atau
              untuk hiburan anda. Mudah dibuat, aman dari kecurangan dan hasil
              analisa dapat dipercaya. Ayo daftar sekarang
            </p>
            <div className="flex flex-col lg:flex-row w-full">
              <Link
                to="/siswa/daftar"
                className=" bg-white text-gray-600 font-bold rounded-full my-3  py-4 px-5 border border-gray-200  shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Daftar sebagai guru
              </Link>
              <Link
                to="/guru/daftar"
                className="lg:mx-2 bg-white text-gray-600 font-bold rounded-full my-3  py-4 px-5 border border-gray-200  shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Daftar sebagai siswa
              </Link>
            </div>
          </div>
          {/*Right Col*/}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" alt="hero" src={hero} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
