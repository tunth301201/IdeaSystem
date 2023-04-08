import React from "react";
import Footer from './Footer';

export default function Viewidea() {
  return (
    <>
      <div id="main-content" className="fixed w-full h-full overflow-auto bg-gray-50 lg:ml-64 pr-64 dark:bg-gray-900">
        <div className="px-4 pt-2">
          <div className="grid w-full grid-cols-1 my-4 ">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile</h3>
              </div>
              {/* Chat */}
              <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left">
                <article className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                        <img
                          className="w-6 h-6 mr-2 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Jese avatar"
                        />
                        Jese Leos
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                          {" "}
                          01/03/2023 4:15 PM
                        </time>
                      </p>
                    </div>
                  </div>
                  <p className="mb-2 text-gray-900 dark:text-white">
                    Ok{" "}
                    <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                      @team
                    </a>{" "}
                    I'am attaching our offer and pitch deck. Take your time to review everything. I'am looking forward to the next steps! Thank you.
                  </p>
                  <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>
                  <div className="items-center 2xl:space-x-4 2xl:flex">
                    {/* Item */}
                    <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                        <svg
                          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                          />
                          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">flowbite_offer_345"</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">PDF, 2.3 MB</p>
                      </div>
                      <div className="flex items-center ml-auto">
                        <button type="button" className="p-2 rounded hover:bg-gray-100">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                            />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    {/* Item */}
                    <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-lg dark:bg-teal-900">
                        <svg
                          className="w-5 h-5 text-teal-600 lg:w-6 lg:h-6 dark:text-teal-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <div className="mr-4">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">bergside_pitch"</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">PPTX, 10.1 MB</p>
                      </div>
                      <div className="flex items-center ml-auto">
                        <button type="button" className="p-2 rounded hover:bg-gray-100">
                          <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                            />
                          </svg>
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <article className="pl-12 mb-5">
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Joseph avatar"
                          />
                          Joseph McFallen
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                            {" "}
                            01/03/2023 4:15 PM
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className="mb-2 text-gray-900 dark:text-white">
                      Hello{" "}
                      <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                        @jeseleos
                      </a>{" "}
                      I need some informations about flowbite react version.
                    </p>
                  </article>
                  <article className="pl-12 mb-5">
                    <footer className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
                          <img
                            className="w-6 h-6 mr-2 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Jese avatar"
                          />
                          Jese Leos
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                            {" "}
                            01/03/2023 4:15 PM
                          </time>
                        </p>
                      </div>
                    </footer>
                    <p className="mb-4 text-gray-900 dark:text-white">
                      Hi{" "}
                      <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">
                        @josephh
                      </a>{" "}
                      Sure, just let me know whean you are available and we can speak.
                    </p>
                    <label htmlFor="chat" className="sr-only">
                      Your message
                    </label>
                    <div className="flex items-center mb-5">
                      <textarea
                        id="chat"
                        rows={1}
                        className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Reply ..."
                        data-gramm="false"
                        wt-ignore-input="true"
                        defaultValue={""}
                      />
                      <button
                        type="submit"
                        className="inline-flex justify-center p-2 rounded-lg cursor-pointer text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600">
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 rotate-90"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                        <span className="sr-only">Send message</span>
                      </button>
                    </div>
                    <a href="/home" className="inline-flex items-center text-xs font-medium cursor-pointer hover:underline text-primary-700 sm:text-sm dark:text-primary-500">
                      Hide away
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        />
                      </svg>
                    </a>
                  </article>
                </article>
              </form>
            </div>
          </div>
        </div>
        <div className="pr-7">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
