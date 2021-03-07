import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { siswaLogin, guruLogin } from "../store/action/AuthAction";
import back from "../image/back.svg";

/*
this componnet to login both for siswa or guru
input props.from ? guru : siswa that get from path
*/

const Login = (props) => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values) => {
    props.from === "guru"
      ? dispatch(
          guruLogin(values.email, values.password, setError, setIsLoading)
        )
      : dispatch(
          siswaLogin(values.email, values.password, setError, setIsLoading)
        );
  };

  return (
    <section className="absolute w-full h-full">
      <div
        className="absolute top-0 w-full h-full bg-gray-900"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-5/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 px-5 py-4 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-5">
                <div className="text-center">
                  <h6 className="text-gray-800 text-4xl font-bold">
                    Masuk sebagai {props.from}
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      ref={register({
                        required: "Email harus dimasukkan!",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "format email belum betul",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="text-red-700 text-sm mt-1">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <div className="flex justify-between">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <Link
                        to="/lupa-password"
                        className="text-blue-700 no-underline block text-xs font-bold mb-2"
                      >
                        Lupa password?
                      </Link>
                    </div>

                    <input
                      name="password"
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Password"
                      style={{ transition: "all .15s ease" }}
                      ref={register({
                        required: "Password harus dimasukkan!",
                        minLength: {
                          value: 6,
                          message: "Password minimal 6 karakter!",
                        },
                      })}
                    />
                    {errors.password && (
                      <div className="text-red-700 text-sm mt-1">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                        style={{ transition: "all .15s ease" }}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-pink-600 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-wrap px-4 justify-center lg:px-10 pt-0 pb-5">
                <div className="flex flex-row justify-center">
                  <p className="text-gray-700">Belum punya akun ? </p>
                  <Link
                    to="/siswa/daftar"
                    className="text-blue-700 no-underline"
                  >
                    {"  "} Daftar
                  </Link>
                </div>
                <p className="text-gray-500 w-full text-center ">atau</p>
                <Link
                  to={props.from === "guru" ? "/siswa/masuk" : "/guru/masuk"}
                  className="text-blue-700 text-lg font-bold no-underline"
                >
                  Masuk sebagai {props.from === "guru" ? "siswa" : "guru"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
