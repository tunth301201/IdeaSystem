import { Sidebar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiSearch,
  HiUsers,
  HiLightBulb,
  HiTag
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();

  const SideBarData = [
    {
        icon: HiChartPie,
        label: "Dashboard",
        path: "/"
    }, 
    {
        icon: HiTag,
        label: "Tags",
        path: "/tags"
    },
    {
        icon: HiLightBulb,
        label: "Ideas",
        path: "/ideas"
    }, 
    {
        icon: HiUsers,
        label: "User list",
        path: "/users/list"
    }
  ]

  const sidebar = SideBarData.map((val, index) => {
    return (
      <Link to={val.path} key={index}>
        <Sidebar.Item
          icon={val.icon}
          className={ val.path === location.pathname 
            ? "bg-gray-100 dark:bg-gray-700" 
            : ""
          }>
          {val.label}
        </Sidebar.Item>
      </Link>
    )
  })
  return (
    <>
    
    <Sidebar id="default-sidebar"
      aria-label="Sidebar with multi-level dropdown example" className="flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700">
   
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {sidebar}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/"
                icon={HiClipboard}
              >
                Docs
              </Sidebar.Item>
              <Sidebar.Item
                href="https://flowbite-react.com/"
                icon={HiCollection}
              >
                Components
              </Sidebar.Item>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/issues"
                icon={HiInformationCircle}
              >
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
    </>
  );
};