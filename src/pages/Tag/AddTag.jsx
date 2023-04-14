import { React, useState } from "react";
import { Label, Textarea, TextInput } from "flowbite-react";
import { addTag } from "../../api/apiServices";
import { useCallback } from "react";
import { useEffect } from "react";


export default function AddTag({user_id, data, setData}) {
  const [tag, setTag] = useState({
    subject: "",
    description: "", 
    start_dateOfTag: "",
    end_dateOfTag: "",
    end_dateOfIdea: ""
  })

  const handleChangeInput = (e) => {
    let {name, value} = e.target;
    setTag({...tag, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", tag.subject)
    formData.append("description", tag.description)
    formData.append("start_dateOfTag", tag.start_dateOfTag)
    formData.append("end_dateOfTag", tag.end_dateOfTag)
    formData.append("end_dateOfIdea", tag.end_dateOfIdea)
    formData.append("user_id", user_id)

    await addTag(formData)
      .then(res => {
        console.log(res)
        data.push(res);
        setData([...data])
      })
      .catch((err)=>{
          console.log(err)
      })  
  }


    return (
      <>
        <div
          data-te-modal-init
          class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-non bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
          id="exampleModalScrollable"
          data-te-backdrop="static"
          data-te-keyboard="false"
          tabindex="-1"
          aria-labelledby="exampleModalScrollable"
          aria-hidden="true">
          <div
            data-te-modal-dialog-ref
            class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
              class="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div
                class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalScrollableLabel">
                  Add Tag
                </h5>
                <button
                  type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close">
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
              <div class="relative overflow-y-auto p-4">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <TextInput
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder='Famous'
                        className="mt-1"
                        value={tag.subject}
                        onChange={handleChangeInput}
                      />
                      {/* <p class="mt-1 text-sm text-green-600 dark:text-green-500"> 
                        Username available!
                      </p> */}
                    </div>
                    <div>
                      <Label htmlFor="end_dateOfIdea">Idea's end date</Label>
                      <TextInput
                        id="end_dateOfIdea"
                        name="end_dateOfIdea"
                        type="date"
                        placeholder="mm/dd/yyyy"
                        className="mt-1"
                        value={tag.end_dateOfIdea}
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div>
                      <Label htmlFor="start_dateOfTag">Start date</Label>
                      <TextInput
                        id="start_dateOfTag"
                        name="start_dateOfTag"
                        type="date"
                        placeholder="mm/dd/yyyy"
                        className="mt-1"
                        value={tag.start_dateOfTag}
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div>
                      <Label htmlFor="end_dateOfTag">End date</Label>
                      <TextInput
                        id="end_dateOfTag"
                        name="end_dateOfTag"
                        type="date"
                        placeholder="mm/dd/yyyy"
                        className="mt-1"
                        value={tag.end_dateOfTag}
                        onChange={handleChangeInput}
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Old topic"
                        rows={6}
                        className="mt-1"
                        value={tag.description}
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  class="pb-2 uppercase text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Close
                </button>
                <button
                  type="submit"
                  class="pb-2 uppercase text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                  data-te-ripple-init
                      
                  data-te-ripple-color="light"
                  onClick={handleSubmit}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }