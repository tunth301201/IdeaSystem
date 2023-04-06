import React from 'react'

export default function Tag() {
  return (
    <>
    <div id="main-content" className="fixed w-full h-full overflow-auto bg-gray-50 lg:ml-64 pr-64 dark:bg-gray-900">
        <div className="px-4 pt-2">
        <div className="grid w-full grid-cols-1 my-4 ">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Tag</h3>
              </div>
              <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left">
                <article className="mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar" />QA Manager Name: Bonnie Green</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> CreateAtdate:01/03/2023 4:15 PM</time></p>
                    </div>                    
                  </div>
                  <p className="mb-3 text-gray-900 dark:text-white">Subject:</p>
                  <p className="mb-2 text-gray-900 dark:text-white">Description:</p>
                  <div className="flex items-center mb-2 ">
                    <p className="inline-flex items-center mr-4 text-sm font-semibold text-gray-900 dark:text-white">Start Date:</p>
                    <p className="inline-flex items-center mx-14 text-sm font-semibold text-gray-900 dark:text-white">End Date:</p>
                    <p className="inline-flex items-center mx-14 text-sm font-semibold text-gray-900 dark:text-white">End Date for Discussion:</p>
                  </div>
                </article>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
