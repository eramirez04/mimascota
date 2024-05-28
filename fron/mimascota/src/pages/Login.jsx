import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-32 lg:px-8">
          <div className="relative overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="bg-hero-main bg-no-repeat bg-cover max-w-md mx-auto py-8 text-center md:py-16 lg:mx-0 lg:py-52 lg:text-left">
              <div className="h-full w-96"> </div>
              <div className="h-full ">
                <div className="w-full max-w-sm p-4  rounded-lg shadow sm:p-6 md:p-8 ">
                  <form className="space-y-6" action="#">
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-950 hover:bg-blue-900  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
