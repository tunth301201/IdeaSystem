import { React, useState, useEffect } from "react";

import { Label, Textarea, TextInput } from "flowbite-react";
import { getIdea } from "../../api/apiServices";

export default function ViewIdea({show, onClose, data}) {
  // const [ideaFiles, setIdeaFiles] = useState([])
  // useEffect(() => {
  //    getIdea(data._id)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // })
  return (
    <>
      {show? 
        <div
          class="fixed top-0 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
          id="exampleModalLg">
          <div
            class="flex min-h-[calc(100%-1rem)] items-center relative w-auto transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]">
            <div
              class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalLgLabel">
                  View Idea
                </h5>
                <button
                  type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  onClick={() => onClose()}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6">
                      <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div data-te-modal-body-ref class="relative overflow-y-auto p-4">
                <form>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div>
                      <Label htmlFor="tag">Tag</Label>
                      <TextInput
                        id="tag"
                        name="tag"
                        placeholder='#'
                        readOnly
                        className="mt-1"
                        value={data.tag_id.subject}
                      />
                    </div>
                    <div>
                      <Label htmlFor="user">User Name</Label>
                      <TextInput
                        id="user"
                        name="user"
                        type="text"
                        readOnly
                        placeholder="#"
                        className="mt-1"
                        value={data.user_id.fullname}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <TextInput
                        id="title"
                        name="title"
                        readOnly
                        type="text"
                        placeholder="#"
                        className="mt-1"
                        value={data.title}
                      />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <TextInput
                        id="content"
                        name="content"
                        type="text"
                        readOnly
                        placeholder="#"
                        className="mt-1"
                        value={data.content}
                      />
                    </div>
                    <div>
                      <Label htmlFor="like">Like</Label>
                      <TextInput
                        id="like"
                        name="like"
                        type="text"
                        readOnly
                        placeholder="#"
                        className="mt-1"
                        value={data.like}
                      />
                    </div>
                    <div>
                      <Label htmlFor="dislike">Dislike</Label>
                      <TextInput
                        id="dislike"
                        name="dislike"
                        type="text"
                        readOnly
                        placeholder="#"
                        className="mt-1"
                        value={data.dislike}
                      />
                    </div>
                    <div>
                      <Label htmlFor="documents">Documents</Label>
                      <TextInput
                        id="documents"
                        name="documents"
                        type="text"
                        readOnly
                        placeholder="#"
                        className="mt-1"
                        value={data.documents}
                      />
                    </div>
                    <div>
                      <Label htmlFor="viewtime">View time</Label>
                      <TextInput
                        id="viewtime"
                        name="viewtime"
                        type="text"
                        readOnly
                        placeholder="#"
                        className="mt-1"
                        value={data.view_time}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  class="pb-2 uppercase text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  onClick={() => onClose()}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      : null}
    </>
  )
}