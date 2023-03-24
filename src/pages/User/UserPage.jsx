/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput
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
  HiTrash
} from "react-icons/hi"
import NavbarSidebarLayout from "../../layouts/NavBar-SideBar"
import AddUser from "./AddUser";
import DeleteUser from "./Delete";
import EditUser from "./EditUser";
  
export default function UserPage() {
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-4">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/users/list">Users</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              All users
            </h1>
          </div>
          <div className="sm:flex">
            <div className="mb-3 hidden items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
              <form className="lg:pr-3">
                <Label htmlFor="users-search" className="sr-only">
                  Search
                </Label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <TextInput
                    id="users-search"
                    name="users-search"
                    placeholder="Search for users"
                  />
                </div>
              </form>
              <div className="mt-3 flex space-x-1 pl-0 sm:mt-0 sm:pl-2">
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Configure</span>
                  <HiCog className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Delete</span>
                  <HiTrash className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Purge</span>
                  <HiExclamationCircle className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Settings</span>
                  <HiDotsVertical className="text-2xl" />
                </a>
              </div>
            </div>
            <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
              <AddUser />
              <Button color="gray">
                <div className="flex items-center gap-x-3">
                  <HiDocumentDownload className="text-xl" />
                  <span>Export</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <AllUsersTable />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </NavbarSidebarLayout>
  )
}

const AllUsersTable = function() {
  
  const userList = [
    {
      name: "Ariana Grande",
      email: "arianagrande@gmail.com",
      image: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952",
      permission: "QA Manager",
      gender: "Female",
      department: "Department A" 
    },
    {
      name: "Emma Stone",
      email: "emmastone@gmail.com",
      image: "https://media1.popsugar-assets.com/files/thumbor/lcn_wDi1eGsJ5E-sOnR4cfZdKJw/0x68:2312x2380/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/03/018/n/1922398/03ad07805e5ee78bbd70d3.36131857_/i/Emma-Stone.jpg",
      permission: "QA",
      gender: "Female",
      department: "Department B" 
    },
    {
      name: "Katy Perry",
      email: "katyperry@gmail.com",
      image: "https://media1.popsugar-assets.com/files/thumbor/5HcZqJL9BiCSn4aLp6rjj3l3CTM/144x83:1984x1923/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/897/n/1922398/582a03955e5432c1e88d95.90383166_/i/Katy-Perry.jpg",
      permission: "Admin",
      gender: "Female",
      department: "Department C" 
    },
    {
      name: "Sam Smith",
      email: "samsmith@gmail.com",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AHgiK1harDlnQqxE2RKXGHeyPHwBDbA4EQ&usqp=CAU",
      permission: "Staff",
      gender: "Male",
      department: "Department A" 
    },
    {
      name: "G-Eazy",
      email: "g-eazy@gmail.com",
      image: "https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2019/10/30311ded2aa378d2c4ad67909493fdfe.jpg",
      permission: "Admin",
      gender: "Male",
      department: "Department B" 
    },
    {
      name: "Justin Timberlake",
      email: "justintimberlake@gmail.com",
      image: "https://www.grazia-magazin.de/sites/default/files/styles/amp_image_ratio_1x1/public/teaser/05.01.2018/justintimberlake.jpg",
      permission: "Staff",
      gender: "Male",
      department: "Department C" 
    }
  ]

  const userData = userList.map((val, index) => {
    return(
      <Table.Row key={index}
        className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-20"
                aria-describedby="checkbox-1"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
              />
              <label htmlFor="checkbox-20" className="sr-only">
                checkbox
              </label>
            </div>
          </Table.Cell>
          <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
            <img
              className="h-10 w-10 rounded-full"
              src={val.image}
              alt="Robert Brown avatar"
            />
            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                {val.name}
              </div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {val.email}
              </div>
            </div>
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            {val.permission}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            {val.gender}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-normal text-gray-900 dark:text-white">
            <div className="flex items-center">
              {/* <div className="mr-2 h-2.5 w-2.5 rounded-full bg-green-400"></div>{" "} */}
              {val.department}
            </div>
          </Table.Cell>
          <Table.Cell>
            <div className="flex items-center gap-x-3 whitespace-nowrap">
              <EditUser />
              <DeleteUser />
            </div>
          </Table.Cell>
        </Table.Row>
    )
  })

  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <Label htmlFor="select-all" className="sr-only">
            Select all
          </Label>
          <Checkbox id="select-all" name="select-all" />
        </Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Position</Table.HeadCell>
        <Table.HeadCell>Gender</Table.HeadCell>
        <Table.HeadCell>Department</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {userData}
      </Table.Body>
    </Table>
  )
}

export const Pagination = function() {
  return (
    <div className="sticky right-0 bottom-0 w-full items-center border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between">
      <div className="mb-4 flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous page</span>
          <HiChevronLeft className="text-2xl" />
        </a>
        <a
          href="#"
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next page</span>
          <HiChevronRight className="text-2xl" />
        </a>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            1-20
          </span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            2290
          </span>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="#"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <HiChevronLeft className="mr-1 text-base" />
        </a>
        <a
          href="#"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <HiChevronRight className="ml-1 text-base" />
        </a>
      </div>
    </div>
  )
}