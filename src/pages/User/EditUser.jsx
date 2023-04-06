import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
  Select,
} from "flowbite-react"
import { useState } from "react"
import {
  HiChevronLeft,
  HiChevronRight,
  HiCog,
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiPlus,
  HiTrash,
  HiUpload
} from "react-icons/hi"

export default function EditUser() {
return (
  <div
    data-te-modal-init
    class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-non bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
    id="exampleModalCenterEditUser"
    tabindex="-1"
    data-te-backdrop="static"
    data-te-keyboard="false"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
    aria-modal="true"
    role="dialog">
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
            id="exampleModalScrollableLabel">
            Edit User
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
        <div class="relative p-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <div className="mt-1">
                  <TextInput
                  id="name"
                  name="name"
                  placeholder="Ariana Grande"
                  />
            </div>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="mt-1">
                <TextInput id="password" name="password" placeholder="123123213" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <div className="mt-1">
                <TextInput
                id="email"
                name="email"
                placeholder="example@company.com"
                type="email"
                />
            </div>
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <div className="mt-1">
                <Select
                    id="gender"
                    name="gender"
                >
                    <option>Female</option>
                    <option>Male</option>
                </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="department">Department</Label>
            <div className="mt-1">
              <Select
                id="department"
                name="department"
              >
                <option>Department A</option>
                <option>Department B</option>
                <option>Department C</option>
              </Select>
          </div>
          </div>
          <div>
            <Label htmlFor="permission">Permission</Label>
            <div className="mt-1">
              <Select
                id="permission"
                name="permission"
              >
                <option>Staff</option>
                <option>QA</option>
              </Select>
            </div>
          </div>
            <div className="lg:col-span-2">
              <div className="flex w-full items-center justify-center">
                <label className="flex h-32 w-full cursor-pointer flex-col rounded border-2 border-dashed border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-700">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <HiUpload className="text-4xl text-gray-300" />
                    <p className="py-1 text-sm text-gray-600 dark:text-gray-500">
                      Upload a file or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden"
                    />
                </label>
              </div>
            </div>
          </div>
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
            type="button"
            class="pb-2 uppercase text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            data-te-ripple-init
            data-te-ripple-color="light">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
)
}