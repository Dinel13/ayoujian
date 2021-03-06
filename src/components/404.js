import React from "react";
import { useLocation } from "react-router-dom";
import back from "../image/back.svg";

const Defult = () => {
  let location = useLocation();

  return (
    <section className="absolute w-full h-screen">
      <div
        className="absolute top-0 w-full h-screen bg-gray-900"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-4 h-96 ">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-5/12 px-4">
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-5 py-6 rounded relative my-5"
              role="alert"
            >
              <h3>
                <strong class="font-bold">
                  Alamat <code>{location.pathname}</code> Tidak tersedia
                </strong>
              </h3>
              <hr className=" border-gray-700 my-3 opacity-50" />
              <h5 className="text-muted">
                Periksa kembali alamat url yang anda tuju
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Defult;
